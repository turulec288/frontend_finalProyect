import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import authService from "../services/auth.service";
  import adService from "../services/ad.service";
  
  const  CreateAdForm = () =>{
  
  
  
      const [adData, setAdData] = useState({
          title:"",
          category:"",
          description:"",
          author:"",
          image:"",
          localization:"",
          
      })
  
      const navigate = useNavigate();
  
  
      const handleInputChange = (e) => {
          const {value , name } = e.target;
          setAdData({...adData, [name]:value});
      };
  
      const handleSubmit = (e)=>{
          e.preventDefault();
          adService
              .create(adData)
              .then(({data}) =>{
                  console.log(data);
                  navigate("/")
              })
      };
  
      const { title, category, description, image, localization } = adData;
    return (
     <form onSubmit={handleSubmit}>
      <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
          type="title"
          value={title}
          onChange={handleInputChange}
          name="title"
         />
      </FormControl>
  
  
      <FormControl>
          <FormLabel>Category</FormLabel>
          <Input
            type="category"
            value={category}
            onChange={handleInputChange}
            name="category"
          />
        </FormControl>
  
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            type="description"
            value={description}
            onChange={handleInputChange}
            name="description"
          />
        </FormControl>
  
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            type="image"
            value={image}
            onChange={handleInputChange}
            name="image"
          />
        </FormControl>
  
        <FormControl>
          <FormLabel>Localization</FormLabel>
          <Input
            type="localization"
            value={localization}
            onChange={handleInputChange}
            name="localization"
          />
        </FormControl>
  
        <div>
        <Button colorScheme="teal" variant="solid" type="submit">
            Upload
          </Button>
        </div>
     </form>
      
    );
  }
  
  export default CreateAdForm