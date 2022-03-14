import React from 'react';
import {Button, Row, Label, Col, Breadcrumb, BreadcrumbItem
} from 'reactstrap'; 
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
    email: yup.string().email().required("required email"),
    firstname: yup.string().min(3).max(10).required("required firstname"),
    lastname: yup.string().min(2).max(10).required("required lastname"),
    telnum: yup.string().matches(phoneRegExp, 'Phone number is not valid')
  });

function Contact(){
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <form onSubmit={handleSubmit((data) => {
                        console.log(data)
                    })} id="create-course-form">
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <input className="form-control" type="text" id="firstname" name="firstname" placeholder="First Name"
                                    {...register("firstname")} required
                                    />
                                    <small className="feedback">{errors.firstname?.message}</small>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <input className="form-control" type="text" id="lastname" placeholder="Last Name"
                                    {...register("lastname")} required
                                    />
                                    <small className="feedback" >{errors.lastname?.message}</small>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <input className="form-control" type="tel" id="telnum" placeholder="Tel. Numner"
                                    {...register("telnum")} required
                                    />
                                     <small className="feedback">{errors.telnum?.message}</small>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <input className="form-control" type="email" id="email" placeholder="Email"
                                    {...register("email")} required
                                    />
                                    <small className="feedback">{errors.email?.message}</small>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset: 2}}>
                                    <Row check>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" {...register("agree")}/>
                                            <label  class="form-check-label"><strong>May be you contact with us?</strong></label>
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={{size:3, offset: 1}}>
                                    <select class="form-control" type="select" {...register("contactType")}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <textarea class="form-control"  id="message" placeholder="Feedback" rows="7"
                                     {...register("message")}
                                   />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color='primary'>Submit</Button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact;