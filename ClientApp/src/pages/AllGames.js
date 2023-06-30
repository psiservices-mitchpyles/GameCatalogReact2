import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import GetDetails from "./GetDetails";

const AllGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const response = await axios.get(`http://localhost:5272/api/Game/`);
        console.log(response);
        setGames(response.data);
    };

    return (
        <div>
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Developer</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={game.id}>
                        <td>{game.id}</td>
                        <td>{game.name}</td>
                        <td>{game.developer}</td>
                        <td>{game.price}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
            <br />
            <GetDetails></GetDetails>
            <br />
            
        </div>
    );
}

export default AllGames;