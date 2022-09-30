import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "../Components/ReadNow.css";

const BasicExample = () => {
  const [users, setUsers] = useState([]);
  console.log(users, "user");

  // `const getUsers = async () => {
  //   const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-19&sortBy=publishedAt&apiKey=afaf9e2e40e74628a75692ffc6ebc459");
  //   // setUsers(await response.json());
  //   console.log(response)
  // };`

  const getUsers = () => {
    //   method: 'GET',
    //   redirect: 'follow'
    // };

    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2022-08-30&sortBy=publishedAt&apiKey=afaf9e2e40e74628a75692ffc6ebc459",
      {
        method: "GET",
      }
    )
      .then((response) => response.text())
      .then((result) =>
        // console.log(JSON.parse(result).articles, "result")
        setUsers(JSON.parse(result).articles)
      )
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.length
        ? users.map((item) => {
            return (
              <div className="newscard">
                {/* <div className="newscard"> */}
                <Card style={{ width: "50rem", height: "15rem" }}>
                  <Card.Img
                    variant="top"
                    className="main-img"
                    src={item.urlToImage}
                  />
                  <Card.Body>
                    <Card.Title>
                      {/* {console.timeLog(item.title, "title")} */}
                      {item.title}
                    </Card.Title>
                    <Card.Text>
                      {/* {console.timeLog(item.content, "discription")} */}
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
            // </div>;
          })
        : "Loading..."}
    </>
  );
};

export default BasicExample;
