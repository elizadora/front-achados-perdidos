import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const handleApiError = (error, customMessage = 'Ocorreu um erro') => {

    if (error instanceof AxiosError) {
        if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
            toast.error('Tamanho da imagem muito grande. Tente novamente.');
            return;
        }
    }

    const status = error.response?.status;
    const serverMessage = error.response?.data?.message;

    let handled = false;

    switch (status) {
        case 400:
            toast.error(serverMessage || 'Dados inválidos.');
            handled = true;
            break;

        case 401:
            toast.error('Não autorizado. Faça login novamente');
            handled = true;
            break;

        case 403:
            toast.error('Você não tem permissão para isso');
            handled = true;
            break;

        case 404:
            toast.error('Recurso não encontrado');
            handled = true;
            break;

        case 500:
            toast.error('Erro interno no servidor');
            handled = true;
            break;
    }

    if (!handled) {
        toast.error(customMessage);
    }
    throw error;
};
