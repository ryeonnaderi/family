import React from "react";

const addMember = (props) =>{
    <form>
    <h1> add a family member</h1>

        <div>
            <input type = "text" name = "name" value = {props.name} onChange = {props.inputChange} placeholder = {name}/>
        </div>
    
        <div>
        <ButtonToolbar>
     <DropdownButton
      bsSize="large"
      title=" family member"
      id="dropdown-size-large"
        >
      <MenuItem eventKey="1">kid</MenuItem>
      <MenuItem eventKey="2">sibling</MenuItem>
      <MenuItem eventKey="3">parent</MenuItem>
      </DropdownButton>  
        </ButtonToolbar>      
        </div>
        
    </form>
}

export default addMember;