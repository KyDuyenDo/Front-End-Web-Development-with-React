import React from 'react';
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useState} from 'react'

const schema = yup.object().shape({
    yourname: yup.string().min(3).max(10).required("required your name"),
  });

function Comment(){
    const [modal, setModal] = useState(false)
    const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)})
    const toggleModal = () =>{
        setModal(!modal)
    }
    return(
        <div>
            <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span>  Submit Comment</Button>
            <Modal fade={false} isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comments</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit((data)=>{
                        console.log(data)
                    })}>
                        <div className="form-group">
                            <label className="label">Rating</label>
                            <select class="form-control" type="select" {...register("yourrating")}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">Your Name</label>
                            <input className="form-control" type="text" placeholder='Your name'
                            {...register('yourname')} required
                            />
                            <small className="feedback">{errors.yourname?.message}</small>
                        </div>
                        <div className="form-group">
                            <label className="label">Comment</label>
                            <textarea className="form-control" rows={7} {...register('yourcomment')}/>
                        </div>
                        <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Comment;