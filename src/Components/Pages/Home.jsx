import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./Redux/toDoSlice";
import Swal from "sweetalert2";

const Home = () => {
  const list = useSelector((state) => state.toDo.items);
  console.log(list);

  const [add, setAdd] = useState({
    id: list.length + 1,
    task: "",
    description: "",
    completed: false,
    favorite: false,
  });
  const dispatch = useDispatch();

  const HandleAdd = () => {
    const { task, description } = add;
    if (!task || !description) {
      Swal.fire({
        text: "Fill the form ",
        icon: "error",
      });
    } else {
      dispatch(addItem(add));
      setAdd({
        id: list.length +2 ,
        task: "",
        description: "",
        completed: false,
        favorite: false,
      });
      Swal.fire({
        text: "Item Added",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <Row className="mt-5">
          <Col lg={6} md={12}>
            <Container className="">
              <img
                className="logo ms-5 mt-3"
                src="https://i.postimg.cc/kXV7j29R/Screenshot-2024-05-02-153000-removebg-preview.png"
                alt=""
              />
              <div className="text-center mt-5 p-5 ">
                <h2>
                  <b>TODO</b>
                </h2>
                <div style={{ textAlign: "justify" }} className="mt-3 p-4">
                  <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum pariatur ipsa porro ipsum, optio voluptas dicta ea eos
                    aspernatur sapiente quaerat dolores aliquam. Eum ex
                    laboriosam necessitatibus libero adipisci! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Mollitia beatae
                    commodi..!
                  </p>
                  <div className="form text-center">
                    <input
                      type="text"
                      className="input-field ps-3 "
                      placeholder="Title"
                      value={add.task}
                      onChange={(e) => setAdd({ ...add, task: e.target.value })}
                    />
                    <input
                      type="text"
                      className="input-field ps-3 mt-4"
                      placeholder="Description"
                      value={add.description}
                      onChange={(e) =>
                        setAdd({ ...add, description: e.target.value })
                      }
                    />
                    <br />
                    <button className="add-btn p-3 mt-4" onClick={HandleAdd}>
                      Add
                    </button>
                  </div>
                </div>
              </div>{" "}
            </Container>
          </Col>
          <Col className="toDoList-Body" lg={6} md={12}>
            <TodoList />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
