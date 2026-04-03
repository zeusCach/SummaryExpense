export default function EditButton({ onSave, onCancel }) {
    return (
        <div className="flex gap-2 ">
            <button
                onClick={onSave}
                className="px-2 py-2 bg-green-500 text-white font-medium rounded-xl cursor-pointer"
            >
                Guardar
            </button>
            <button
                onClick={onCancel}
                className="px-2 py-2 bg-red-400 text-white font-medium rounded-xl cursor-pointer"
            >
                Cancelar
            </button>
        </div>
    )
}