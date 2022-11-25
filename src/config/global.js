import { toast } from 'react-toastify'

window.notify = (msg, type) => {

    const option = {
        position: "bottom-right",
        autoClose: 1000,
        
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    switch (type) {
        case "success":
            toast.success(msg, option)
            break
        case "error":
            toast.error(msg, option)
            break
        case "info":
            toast.info(msg, option)
            break
        case "warning":
            toast.warning(msg, option)
            break
        default:
            toast(msg, option)
    }
}