import React, { Component } from "react";
import axios from "axios";

class GetDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            id: "",
            updatedName: "",
            updatedDeveloper: "",
            updatedPrice: "",
            newGameName: "",
            newGameDeveloper: "",
            newGamePrice: "",
        };
    }

    handleInputChange = (event) => {
        this.setState({ id: event.target.value });
    };

    fetchGetDetails = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5272/api/Game/${this.state.id}`
            );
            this.setState({ games: response.data });
        } catch (error) {
            console.log(error);
        }
    };

    deleteGame = async () => {
        try {
            await axios.delete(`http://localhost:5272/api/Game/${this.state.id}`);
            this.setState({ games: [] });
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdate = async () => {
        const { id, updatedName, updatedDeveloper, updatedPrice } = this.state;
        try {
            await axios.put(`http://localhost:5272/api/Game/${id}`, {
                name: updatedName,
                developer: updatedDeveloper,
                price: updatedPrice,
            });

            this.setState({
                updatedName: "",
                updatedDeveloper: "",
                updatedPrice: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    handleAddGame = async () => {
        const { newGameName, newGameDeveloper, newGamePrice } = this.state;
        try {
            await axios.post("http://localhost:5272/api/Game", {
                name: newGameName,
                developer: newGameDeveloper,
                price: newGamePrice,
            });

            this.setState({
                newGameName: "",
                newGameDeveloper: "",
                newGamePrice: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const {
            games,
            id,
            updatedName,
            updatedDeveloper,
            updatedPrice,
            newGameName,
            newGameDeveloper,
            newGamePrice,
        } = this.state;

        return (
            <div className="container">
                <h2>Get Game Details</h2>
                <div className="input-container">
                    <input
                        type="text"
                        value={id}
                        onChange={this.handleInputChange}
                        placeholder="Enter Game ID"
                    />
                    <button onClick={this.fetchGetDetails}>Get Details</button>
                </div>

                <div className="details-container">
                    {games.map((game) => (
                        <div key={game.id} className="game-details">
                            <h2>{"Game: " + game.id}</h2>
                            <p>Name: {game.name}</p>
                            <p>Developer: {game.developer}</p>
                            <p>Price: {game.price}</p>
                            <button onClick={this.deleteGame}>Delete Game</button>
                        </div>
                    ))}

                    <div className="update-game-container">
                        <h2>Update Game</h2>
                        <input
                            type="text"
                            value={updatedName}
                            onChange={(e) =>
                                this.setState({ updatedName: e.target.value })
                            }
                            placeholder="New Name"
                        />
                        <input
                            type="text"
                            value={updatedDeveloper}
                            onChange={(e) =>
                                this.setState({ updatedDeveloper: e.target.value })
                            }
                            placeholder="New Developer"
                        />
                        <input
                            type="text"
                            value={updatedPrice}
                            onChange={(e) =>
                                this.setState({ updatedPrice: e.target.value })
                            }
                            placeholder="New Price"
                        />
                        <button onClick={this.handleUpdate}>Update Game</button>
                    </div>

                    <div className="add-game-container">
                        <h2>Add New Game</h2>
                        <input
                            type="text"
                            value={newGameName}
                            onChange={(e) =>
                                this.setState({ newGameName: e.target.value })
                            }
                            placeholder="Game Name"
                        />
                        <input
                            type="text"
                            value={newGameDeveloper}
                            onChange={(e) =>
                                this.setState({ newGameDeveloper: e.target.value })
                            }
                            placeholder="Game Developer"
                        />
                        <input
                            type="text"
                            value={newGamePrice}
                            onChange={(e) =>
                                this.setState({ newGamePrice: e.target.value })
                            }
                            placeholder="Game Price"
                        />
                        <button onClick={this.handleAddGame}>Add Game</button>
                    </div>
                </div>

                <style>{`
          .container {
            background-color: #f8f8f8;
            color: black;
            padding: 20px;
            border-radius: 5px;
            width: 700px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
          }

          h2 {
            color: #333;
            margin-bottom: 10px;
          }

          .input-container {
            margin-bottom: 20px;
          }

          .details-container {
            display: flex;
            flex-wrap: wrap;
          }

          .game-details,
          .update-game-container,
          .add-game-container {
            flex: 1 1 300px;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
          }

          input {
            margin-bottom: 10px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
          }

          button {
            margin-top: 10px;
            padding: 5px 10px;
            border: none;
            background-color: #4caf50;
            color: #fff;
            border-radius: 3px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }
        `}</style>
            </div>
        );
    }
}

export default GetDetails;
