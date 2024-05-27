import { Button, Modal, Form, Input } from "antd";
import { useContext, useState } from "react";
import { MovieContext } from "../../../context/movieContext";

const CardFooter = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useContext(MovieContext);
  const [form] = Form.useForm();

  const handleEdit = (values) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, l: values.title } : movie
    );
    setMovies(updatedMovies);
    setOpen(false);
  };

  return (
    <div className="flex justify-around">
      <Modal
        title="Edit title!"
        open={open}
        onOk={form.submit}
        onCancel={() => setOpen(false)}
      >
        <Form
          form={form}
          initialValues={{
            title: movies.find((movie) => movie.id === id)?.l,
          }}
          onFinish={handleEdit}
        >
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
        </Form>
      </Modal>
      <div className="flex justify-around gap-5">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Edit
        </Button>
        <Button
          danger
          type="primary"
          onClick={() => {
            setMovies(movies.filter((value) => value.id !== id));
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CardFooter;
