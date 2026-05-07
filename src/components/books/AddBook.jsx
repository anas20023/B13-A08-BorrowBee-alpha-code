"use client";

import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField
} from "@heroui/react";

const AddBookModal = () => {

    const handleSubmit = async (formData) => {
        const data = Object.fromEntries(formData.entries());
        console.log("Form Submitted");
        console.log(data);
    };

    return (
        <Modal>
            <Button className="fixed right-10 bottom-10 z-50">
                Add Book
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md md:max-w-lg">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Add New Book</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-4">
                            <Surface variant="default">

                                <form action={handleSubmit} className="flex flex-col gap-4">

                                    {/* Title */}
                                    <TextField className="w-full">
                                        <Label>Title</Label>
                                        <Input
                                            name="title"
                                            placeholder="Enter book title"
                                        />
                                    </TextField>

                                    {/* Author */}
                                    <TextField className="w-full">
                                        <Label>Author</Label>
                                        <Input
                                            name="author"
                                            placeholder="Enter author name"
                                        />
                                    </TextField>

                                    {/* Description */}
                                    <div className="flex flex-col gap-2">
                                        <Label>Description</Label>

                                        <TextArea
                                            className="w-full"
                                            name="description"
                                            placeholder="Enter Description"
                                        />
                                    </div>

                                    {/* Category */}
                                    <TextField className="w-full">
                                        <Label>Category</Label>

                                        <Input
                                            name="category"
                                            placeholder="Enter category (comma separated)"
                                        />
                                    </TextField>

                                    {/* Quantity */}
                                    <TextField className="w-full">
                                        <Label>Available Quantity</Label>

                                        <Input
                                            name="available_quantity"
                                            type="number"
                                            placeholder="Enter Available Quantity"
                                        />
                                    </TextField>

                                    {/* Rating */}
                                    <TextField className="w-full">
                                        <Label>Rating</Label>

                                        <Input
                                            name="rating"
                                            type="number"
                                            placeholder="Enter rating"
                                        />
                                    </TextField>

                                    {/* Image URL */}
                                    <TextField className="w-full">
                                        <Label>Image Url</Label>

                                        <Input
                                            name="image_url"
                                            placeholder="Enter Image Url"
                                        />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button type="submit">
                                            Add Book
                                        </Button>
                                    </Modal.Footer>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddBookModal;