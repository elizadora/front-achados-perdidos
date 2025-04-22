import React from 'react';
import { X } from 'lucide-react';

const ModalCadastro = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md p-6 rounded shadow-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4">Cadastrar item</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm">Nome</label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded text-sm" placeholder="Nome do objeto" />
          </div>

          <div>
            <label className="block text-sm">Tipo</label>
            <select className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm focus:outline-none hover:bg-gray-100 hover:text-blue-600">
              <option>Achado</option>
              <option>Perdido</option>
            </select>
          </div>

          <div>
            <label className="block text-sm">Categoria</label>
            <select className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm focus:outline-none hover:bg-gray-100 hover:text-blue-600">
              <option>Eletrônicos</option>
              <option>Chaves</option>
              <option>Roupas</option>
              <option>Objetos Pessoais</option>
            </select>
          </div>

          <div>
            <label className="block text-sm">Local</label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded text-sm" placeholder="Localização" />
          </div>

          <div>
            <label className="block text-sm">Data</label>
            <input type="date" className="w-full border border-gray-300 px-3 py-2 rounded text-sm" />
          </div>

          {/* Descrição + Upload */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm">Descrição</label>
              <textarea
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
                rows="3"
                placeholder="(opcional)"
              ></textarea>
            </div>
            <div className="flex flex-col items-center justify-center w-28">
              <label className="block w-full">
              <div className="w-full h-10 text-sm rounded flex items-center justify-center cursor-pointer">
  <i className="fas fa-upload mr-2 text-black"></i>
 
</div>

                <input type="file" className="hidden" />
              </label>
              <span className="text-xs mt-1 text-center text-gray-500">
                Upload<br />(opcional)
              </span>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded text-sm shadow-md hover:bg-gray-100">
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm shadow-md hover:bg-blue-700"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCadastro;
