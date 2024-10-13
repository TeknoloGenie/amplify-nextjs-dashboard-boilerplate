import Modal from "@/components/modal";
import { Button } from "@aws-amplify/ui-react";
import { useState } from "react";

export default function ModalExample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>   
            <Button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Open Modal
            </Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
                <p>This is the content of the modal.</p>
            </Modal>
        </>
    )
}