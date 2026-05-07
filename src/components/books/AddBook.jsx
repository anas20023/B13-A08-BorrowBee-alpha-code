"use client";

import { createBookAction } from "@/utils/actions";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const AddBookModal = () => {

    const router = useRouter();

    const [open, setOpen] = useState(false);

    const handleSubmit = async (formData) => {

        const data = Object.fromEntries(formData.entries());

        // Trim values
        const title = data.title?.trim();
        const author = data.author?.trim();
        const description = data.description?.trim();
        const category = data.category?.trim();
        const image_url = data.image_url?.trim();

        const available_quantity = Number(data.available_quantity);
        const rating = Number(data.rating);

        // Validation
        if (!title) {
            return toast.error("Title is required");
        }

        if (title.length < 3) {
            return toast.error("Title must be at least 3 characters");
        }

        if (!author) {
            return toast.error("Author name is required");
        }

        if (author.length < 2) {
            return toast.error("Author name is too short");
        }

        if (!description) {
            return toast.error("Description is required");
        }

        if (description.length < 20) {
            return toast.error("Description must be at least 20 characters");
        }

        if (!category) {
            return toast.error("Category is required");
        }

        if (!available_quantity || available_quantity < 1) {
            return toast.error("Available quantity must be greater than 0");
        }

        if (isNaN(rating)) {
            return toast.error("Rating is required");
        }

        if (rating < 1 || rating > 5) {
            return toast.error("Rating must be between 1 and 5");
        }

        if (!image_url) {
            return toast.error("Image URL is required");
        }

        // URL Validation
        try {
            new URL(image_url);
        } catch {
            return toast.error("Please enter a valid image URL");
        }

        try {

            await createBookAction(formData);

            toast.success("Book Added!");

            // Close Modal
            setOpen(false);

            // Refresh Data
            router.refresh();

        } catch (error) {

            toast.error(error.message || "Failed to Add Book");

        }
    };

    return (

        <Modal isOpen={open} onOpenChange={setOpen}>

            {/* Open Button */}
            <Button
                className="fixed right-10 bottom-10 z-50"
                onClick={() => setOpen(true)}
            >
                <FiPlus size={18} />
                Add Book
            </Button>

            <Modal.Backdrop>

                <Modal.Container placement="auto">

                    <Modal.Dialog className="sm:max-w-md md:max-w-lg">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>
                                Add New Book
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-4">

                            <Surface variant="default">

                                <form
                                    action={handleSubmit}
                                    className="flex flex-col gap-4"
                                >

                                    {/* Title */}
                                    <TextField className="w-full">

                                        <Label>Title</Label>

                                        <Input
                                            name="title"
                                            placeholder="Enter book title"
                                            required
                                            minLength={3}
                                        />

                                    </TextField>

                                    {/* Author */}
                                    <TextField className="w-full">

                                        <Label>Author</Label>

                                        <Input
                                            name="author"
                                            placeholder="Enter author name"
                                            required
                                            minLength={2}
                                        />

                                    </TextField>

                                    {/* Description */}
                                    <div className="flex flex-col gap-2">

                                        <Label>Description</Label>

                                        <TextArea
                                            className="w-full"
                                            name="description"
                                            placeholder="Enter Description"
                                            required
                                            minLength={20}
                                        />

                                    </div>

                                    {/* Category */}
                                    <TextField className="w-full">

                                        <Label>Category</Label>

                                        <Input
                                            name="category"
                                            placeholder="Enter category"
                                            required
                                        />

                                    </TextField>

                                    {/* Available Quantity */}
                                    <TextField className="w-full">

                                        <Label>Available Quantity</Label>

                                        <Input
                                            name="available_quantity"
                                            type="number"
                                            placeholder="Enter Available Quantity"
                                            required
                                            min={1}
                                        />

                                    </TextField>

                                    {/* Rating */}
                                    <TextField className="w-full">

                                        <Label>Rating</Label>

                                        <Input
                                            name="rating"
                                            type="number"
                                            placeholder="Enter rating"
                                            required
                                            min={1}
                                            max={5}
                                            step="0.1"
                                        />

                                    </TextField>

                                    {/* Image URL */}
                                    <TextField className="w-full">

                                        <Label>Image Url</Label>

                                        <Input
                                            name="image_url"
                                            type="url"
                                            placeholder="Enter Image Url"
                                            required
                                        />

                                    </TextField>

                                    <Modal.Footer>

                                        <Button
                                            slot="close"
                                            variant="secondary"
                                        >
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