import {
  Box, Button, MenuItem, Modal, Select, TextField, Typography, Stack, IconButton
} from "@mui/material";
import UploadFile from "@mui/icons-material/UploadFile";
import Cancel from "@mui/icons-material/Cancel";
import { useEffect, useRef, useState } from "react";
import { updateItem, createItem, getItemById } from "../services/itemService";
import { getAllCategories } from "../services/categoryService";

export default function ItemModal({ open, onClose, itemIdFromProps, onItemSaved }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [referencia, setReferencia] = useState("");
  const [foto, setFoto] = useState("");
  const [status, setStatus] = useState(0);
  const [categoriaId, setCategoriaId] = useState(1);
  const [categorias, setCategorias] = useState([]);
  const [itemId, setItemId] = useState(false);

  const inputImageRef = useRef(null);

  useEffect(() => {
    if (itemIdFromProps) {
      handleItemById(itemIdFromProps);
    }
    fetchCategories();
  }, [itemIdFromProps]);


  const pupulateFields = (field) => {
    setNome(field.nome || "");
    setData(field.data ? field.data.substring(0, 10) : "");
    setRua(field.rua || "");
    setBairro(field.bairro || "");
    setCidade(field.cidade || "");
    setReferencia(field.referencia || "");
    setFoto(field.foto || "");
    setStatus(field.status || 0);
    setCategoriaId(field?.item_categoria?.[0]?.categoria?.id || 1);
    setItemId(true);
  }

  const fetchCategories = async () => {
    try {
      const res = await getAllCategories();
      setCategorias(res.data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const handleItemById = async (id) => {
    try {
      const res = await getItemById(id);
      pupulateFields(res.data);
    } catch (error) {
      console.error("Erro ao carregar item:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = new FileReader();
    file.onloadend = () => {
      if (file.result !== "") {
        setFoto(file.result);
      }
    };
    file.readAsDataURL(e.target.files[0]);
  };

  const removeImage = () => {
    setFoto(null);
    if (inputImageRef.current) inputImageRef.current.value = "";
  };

  const clearFields = () => {
    setNome("");
    setData("");
    setRua("");
    setBairro("");
    setCidade("");
    setReferencia("");
    setFoto("");
    setStatus(0);
    setCategoriaId(1);
    removeImage();
  };

  const submit = async (e) => {
    e.preventDefault();
    const data_entry = {
      nome, data, rua, bairro, cidade, referencia, foto, status, categoriaId,
    };

    try {
      if (itemId) {
        await updateItem(itemIdFromProps, data_entry);
        setItemId(false);
      } else {
        await createItem(data_entry);
      }
      onClose();
      clearFields();
      onItemSaved?.();

    } catch (error) {
      console.error("Erro ao salvar item: ", error);
      if (error.message.includes('Tamanho')) {
        setFoto(null);
      }
    }
  };

  return (
    <Modal
      open={open} className="flex justify-center items-center p-1"
      onClose={() => { onClose(); clearFields(); }}
      onItemSaved={onItemSaved}
    >
      <Box
        className="w-[90%] md:w-[60%] lg:w-[38%] overflow-y-auto md 
        max-h-[90vh] !p-8 rounded-md bg-white !relative"
        sx={{
          boxShadow: 24,
        }}
      >
        <IconButton onClick={() => {
          onClose();
          clearFields();
        }
        } className="!absolute !top-3 !right-4.5 !text-[#0028DF] hover:!bg-[#3a5bff21]">
          <Cancel />
        </IconButton>


        <Typography
          className="font-bold !text-2xl md:!text-3xl"
        >
          {itemId ? "Editar Item" : "Cadastrar Item"}
        </Typography>

        <form onSubmit={submit} className="flex flex-col gap-5 mt-7 font-medium text-base md:text-lg">
          <div>
            <div>
              <label className="block text-gray-700 mb-[1.2vh]">Nome do Objeto</label>
              <TextField
                placeholder="Ex: Chave de carro"
                className="!border !border-[#D9D9D9] rounded-md"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                fullWidth
              />
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-[1.2vh]">Tipo</label>
              <Select
                value={status}
                required
                onChange={(e) => setStatus(Number(e.target.value))}
                fullWidth
                sx={{
                  backgroundColor: "#0028DF",
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0028DF",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0028DF",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0028DF",
                  },
                }}
              >
                <MenuItem value={0}>Achado</MenuItem>
                <MenuItem value={1}>Perdido</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 mb-[1.2vh]">Data</label>
              <TextField
                className="!border !border-[#D9D9D9] rounded-md"
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                fullWidth
              />
            </div>
          </section>

          <div>
            <label className="block text-gray-700 mb-[1.2vh]">Categoria</label>
            <Select
              className="!border !border-[#D9D9D9] rounded-md"
              value={categoriaId}
              onChange={(e) => setCategoriaId(Number(e.target.value))}
              fullWidth
            >
              {categorias.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.nome}
                </MenuItem>
              ))}
            </Select>
          </div>


          <section>
            <span className="block text-gray-700 mb-[1.2vh]">Local</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <TextField
                  className="!border !border-[#D9D9D9] rounded-md"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                  fullWidth
                  label="Rua"
                />
              </div>
              <div>
                <TextField
                  className="!border !border-[#D9D9D9] rounded-md"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  fullWidth
                  label="Bairro"
                />
              </div>
              <div>
                <TextField
                  className="!border !border-[#D9D9D9] rounded-md"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  fullWidth
                  label="Cidade"
                />
              </div>
              <div>
                <TextField
                  className="!border !border-[#D9D9D9] rounded-md"
                  value={referencia}
                  onChange={(e) => setReferencia(e.target.value)}
                  fullWidth
                  label="Referência"
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center">
            <input
              id="upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            <label
              htmlFor="upload"
              className="w-full md:max-w-xs cursor-pointer flex justify-center font-normal items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 transition"
            >
              <UploadFile />
              Upload (opcional)
            </label>

            {foto && (
              <div className="relative mt-6 w-full lg:w-1/2 md:max-w-xs">
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 w-8 h-8 border-2 cursor-pointer border-gray-300 bg-white 
          bg-opacity-80 rounded-full flex items-center justify-center text-gray-700 hover:scale-110 shadow"
                  aria-label="Remover imagem"
                >
                  <Cancel />
                </button>

                <img
                  src={foto}
                  alt="Imagem do item"
                  className="w-full max-h-60 object-cover rounded"
                />
              </div>
            )}
          </section>

          <div className="flex justify-center md:justify-end pt-[2vh]">
            <Stack spacing={2} direction="row" sx={{
              '& .MuiButton-root': {
                textTransform: 'capitalize',
              }
            }}>
              <Button type="button" variant="outlined" fullWidth onClick={() => { onClose(); clearFields(); }}
                className="mt-4 !text-base md:!text-lg !border-[#8A8A8A] !text-[#8A8A8A]">
                Cancelar
              </Button>

              <Button type="submit" variant="contained" fullWidth className="mt-4 !text-base md:!text-lg !bg-[#0028DF] hover:!bg-[#0024C9]">
                {itemId ? "Editar" : "Cadastrar"}
              </Button>
            </Stack>
          </div>
        </form>
      </Box>
    </Modal>
  );
}