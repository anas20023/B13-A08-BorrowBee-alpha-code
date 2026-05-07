"use client";

import { Button, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";

const AddBookModal = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Form Submitted")
    }
    return (
        <Modal>
            <Button className={'fixed right-10 bottom-10 z-10000'}>Add Book</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md md:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Add New Book</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-4">
                            <Surface variant="default">
                                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="title" type="text">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter book title" />
                                    </TextField>
                                    <TextField className="w-full" name="author" type="text">
                                        <Label>Author</Label>
                                        <Input placeholder="Enter author name" />
                                    </TextField>
                                    <Label>Description</Label>
                                    <TextArea className="w-full" name="description" type="text" defaultValue={"Enter Description"} >
                                    </TextArea>
                                    <TextField className="w-full" name="catagory" type="text">
                                        <Label>Catagory</Label>
                                        <Input placeholder="Enter catagory (comma separeted)" />
                                    </TextField>
                                    <TextField className="w-full" name="available_quantity">
                                        <Label>Available Quantity</Label>
                                        <Input placeholder="Enter Available Quantity" />
                                    </TextField>
                                    <TextField className="w-full" name="number">
                                        <Label>Rating</Label>
                                        <Input placeholder="Enter rating" />
                                    </TextField>
                                    <TextField className="w-full" name="text">
                                        <Label>Image Url</Label>
                                        <Input placeholder="Enter Image Url" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Add Book</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
export default AddBookModal