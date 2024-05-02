import React, { useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, markCompleted, markFavorite } from "./Redux/toDoSlice";
import Swal from "sweetalert2";

const TodoList = () => {
  const list = useSelector((state) => state.toDo.items);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();


  const handleDelete = (id) => {
    dispatch(deleteItem(id));
    Swal.fire({
      text: "Item Deleted",
      icon: "success"
    });
  };

  const handleComplete = (item) => {
    dispatch(markCompleted(item));
    Swal.fire({
      text: "Marked as Completed",
      icon: "success"
    });
  };

  const handleFavorite = (item) => {
    dispatch(markFavorite(item));
    Swal.fire({
      text: "Marked as Favorite",
      icon: "success"
    });
   
  };

  const filteredList = () => {
    let filteredList = list;
    if (filter === "completed") {
      filteredList = filteredList.filter((item) => item.completed);
    } else if (filter === "favorite") {
      filteredList = filteredList.filter((item) => item.favorite);

    }
    
    if (search) {
      filteredList = filteredList.filter((item) =>
        item.task.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filteredList;
  };

  return (
    <div>
      <Container className="p-5">
        <h4>TODO LIST</h4>
        <Row className="mt-5">
          <Col>
            <input
              type="text"
              placeholder="Search"
              className="ps-2 p-1 serachInput"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="dropDwon btn">
                <span className="m-1">Filter By</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilter(null)}>
                  All
                </Dropdown.Item>
                <Dropdown.Item value="Completed"  onClick={() => setFilter("completed")}>
                  Completed
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilter("favorite")}>
                  Favorite
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <div className="list mt-5 pt-2">
          {filteredList().length === list.length ? filteredList().map((i, index) => (
            <React.Fragment key={index}>
              <h4>
                {i?.task} {i?.completed ? "✅" : ""} {i?.favorite ? "❤️" : ""}
              </h4>
              <div className="d-flex">
                <div>
                  <p>{i?.description}</p>
                </div>

                <div className="text-end w-100">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropDwon btn"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleComplete(i)}>
                        Completed
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleFavorite(i)}>
                        Favorite
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete(i?.id)}>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <hr />
            </React.Fragment>
          )):<h3 className="text-center mt-3 text-danger">ToDo Not Found!!!</h3>}
        </div>
      </Container>
    </div>
  );
};
export default TodoList;
