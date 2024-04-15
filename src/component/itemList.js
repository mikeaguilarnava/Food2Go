import React, { useState } from "react";
import Modal from 'react-modal';
import ItemRow from "./itemRow";

const ItemList = ( props ) => {
    const itemArray = [
        // {
        //     id: 1,
        //     description: "Caesar Salad",
        //     quantity: 1,
        //     price: 10,
        // },
        // {
        //     id: 2,
        //     description: "Blue Moon",
        //     quantity: 3,
        //     price: 30,
        // },
      ];

    let meals = [
        { label: "Boneless", value: "Boneless" },
        { label: "Buffalo Wing Sandwich", value: "Buffalo Wing Sandwich" },
        { label: "Caesar Salad", value: "Caesar Salad" },
        { label: "Cerveza Blue Moon", value: "Cerveza Blue Moon" },
        { label: "Cerveza Modelo", value: "Cerveza Modelo" },
        { label: "Coca Cola", value: "Coca Cola" },
        { label: "Dumpling", value: "Dumpling" },
        { label: "Lonche El Payo", value: "Lonche El Payo" },
        { label: "Pizza Margherita", value: "Pizza Margherita" },
        { label: "Pollo Loco", value: "Pollo Loco" },
        { label: "Tacos de Tripita", value: "Tacos de Tripita" },
        { label: "Teppanyaki", value: "Teppanyaki" },
        { label: "Sushi", value: "Sushi" },
    ]
    
    let numbers = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
    ]

    
    
    let subtitle;

    const [items, setItems] = useState(itemArray);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [meal, setMeal] =  useState("⬇️ Select a Meal ⬇️");
    const [number, setNumber] = useState("⬇️ Quantity ⬇️");
  
    let handleMealChange = (e) => {
        setMeal(e.target.value)
      }

      let handleNumberChange = (e) => {
        setNumber(e.target.value)
      }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
            backgroundColor: '#252423b5'
          },
      };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'coral';
    }

    function closeModal() {
        setMeal("⬇️ Select a Meal ⬇️");
        setNumber("⬇️ Quantity ⬇️");
        setIsOpen(false);  
    }

    const addItem = (e) => {
    
        if(
            meal.includes("Select") ||
            number.includes("Quantity") 
        ){
            alert('Please complete "ORDER HERE" section');
        }
        else if(
            props.city.includes("Select") ||
            props.zipCode.includes("Select") 
        ){
            alert('Please complete "DELIVER INFO" section');
            setIsOpen(false);
        }else if(
            props.name === "" ||
            props.gender.includes("Select") ||
            props.ageRange.includes("Select") 
        ){
            alert('Please complete "USER INFORMATION" section');
            setIsOpen(false);
        }
        else
        {
            setItems([
                ...items,
                {
                    id: items.length+1,
                    description: meal,
                    quantity: number,
                    price: 10*number,
                },
            ]);
            setIsOpen(false);

            let itemString = `{`;
            itemString += `"name": "${props.name}", `;
            itemString += `"gender": "${props.gender}", `;
            itemString += `"ageRange": "${props.ageRange}", `;
            itemString += `"city": "${props.city}", `;
            itemString += `"zipCode": "${props.zipCode}", `;
            itemString += `"itemName": "${meal}", `;
            itemString += `"itemQuantity": ${number}, `;
            itemString += `"itemPrice": ${10*number}`;
            itemString += `}`; 

            let itemJSON = JSON.parse(itemString);

            // TODO: CALL API ***********************+

            console.log(itemJSON);

        }
        e.preventDefault();

    };
  
    return (
      <>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <ItemRow key={it.id} item={it} />
            ))}
          </tbody>
        </table>
        <div className="col-1" id="main2">
        <button className="btn btn-primary" onClick={openModal}>
          Add
        </button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            appElement={document.getElementById('main')}
        >
            <button onClick={closeModal}>X</button>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>🍟 Add your item 🍱</h2>
            <form>
                
                <div style={{width : "100%"}}>
                    <select onChange={handleMealChange}> 
                        <option value="⬇️ Select a Meal ⬇️"> ⬇️ Select a Meal  ⬇️</option>
                        {meals.map((meal) => <option value={meal.value}>{meal.label}</option>)}
                    </select>
                    <select onChange={handleNumberChange}> 
                        <option value="⬇️ Quantity ⬇️"> ⬇️ Quantity ⬇️</option>
                        {numbers.map((number) => <option value={number.value}>{number.label}</option>)}
                    </select>
                </div>
                <br></br>
                <button className="btn btn-primary" onClick={addItem}>
                    OK
                </button>
            </form>
        </Modal>
        </div>
      </>
    );
  };
  
  export default ItemList;