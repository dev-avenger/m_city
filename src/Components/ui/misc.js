import React from 'react';
import {Link} from 'react-router-dom';


export const Tag = (props) => {

  const template = <div
                      style={{
                        background:props.bck,
                        fontSize:props.size,
                        color:props.color,
                        padding:'5px 10px',
                        display:'inline-block',
                        fontFamily:'Righteous',
                        ...props.add
                      }}
                    >{props.children}</div>

  if(props.link){
    return(
      <Link to={props.linkTo}>
        {template}
      </Link>
    )
  } else {
      return template
  }
}



//We need id to be in the object instead
//outside of the object to do this.
//We need to write down this function.
//Which will embed the key inside an object

export const firebaseLooper = (snapshot) => {
  let data =[]
  snapshot.forEach((childSnapshot) => {            //forEach is the method for firebase
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    })
  });
    return data
}


// To reverse  an array so that last item show first
// we will use the following function.

export const reverseArray = (actualArray) => {
  let reversedArray =[];

    for(let i=actualArray.length-1; i>=0;i--){
      reversedArray.push(actualArray[i])
    }
    return reversedArray

}


//Form input field Error Validation

export const validate = (element) =>{

  let error = [true,''];
  console.log("Validation");
  console.log(element);
  if(element.validation.email){
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? 'Must be a valid email':''}`;
    error = !valid ? [valid,message]:error
  }
  if(element.validation.required){
    const valid = element.value.trim() !== '';
    const message= `${!valid ? 'this field is required':''}`;
    error = !valid ? [valid,message]:error
  }
  return error;

}