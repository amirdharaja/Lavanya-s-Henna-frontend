
import React from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

import { BASE_URL, AUTH_TOKEN } from '../../store/actions/ActionTypes';
import { adminLogout } from '../../store/actions/actions';

import Alert from '../Alert';
import { Modal, ModalBody, ModalHeader, Form, Label, Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Item from '../admin/Item'
import Request from '../admin/Request'
import { Spinner } from 'reactstrap';

import logo from '../../resources/logo/logo.png';

import { Redirect } from 'react-router-dom';


const FILE_TYPES = ['jpg', 'JPG', 'jpeg', 'JPEG', 'PNG']



export class Dashboard extends React.Component {

    state = {
        alertVisible: false,
        name: '',
        requests: [],
        gallery: [],
        mainSlide: [],
        pageImages: [],
        responseUser: {
            id: null,
            name: null,
            phone: null,
            email: null,
            details: ' ',
            index: null,
        },
        newGalleryImagePackage: null,
        newGalleryImageArea: null,
        response: null,
        showResponseModal: false,
        showAddGalleryModal: false,
        showAddMainSlideModal: false,
        showAddPageImageModal: false,
    }

    handleResponse(data) {
        this.setState({ responseUser: data })
        this.setState({ showResponseModal: true })
    }

    ShowHandler = (event) => {
        this.setState({ name: event.target.value });
        this.getDashboardData(event.target.value);
    }

    componentDidMount() {
        this.getDashboardData('requests');
    }

    getDashboardData(name) {
        if (!AUTH_TOKEN) window.location.replace("/lavanyashenna/admin/login");
        else {
            const url = BASE_URL + '/admin/' + name + '/'
            axios.get(url, { headers: { 'Authorization': `token ${AUTH_TOKEN}` } })
                .then(response => {
                    this.setState({ loading: false })
                    if (name === 'gallery-images') this.setState({ gallery: response.data.data })
                    else if (name === 'main-slide-images') this.setState({ mainSlide: response.data.data })
                    else if (name === 'page-images') this.setState({ pageImages: response.data.data })
                    else this.setState({ requests: response.data.data })
                })
                .catch(error => {
                    this.setState({
                        alertVisible: true,
                        alertType: 'danger',
                        alertTitle: 'Sorry',
                        alertMessage: 'Unable to complete the process, Try again'
                    })
                })
        }
    }

    handleDeleteFunc(item) {
        if (!AUTH_TOKEN) window.location.replace("/lavanyashenna/admin/login");
        else {
            const url = BASE_URL + '/admin/' + item.itemCategory + '/' + item.id
            axios.delete(url, { headers: { 'Authorization': `token ${AUTH_TOKEN}` } })
                .then(response => {
                    this.updateState(item.itemCategory, item.id, item.index)
                })
                .catch(error => {
                    this.setState({
                        alertVisible: true,
                        alertType: 'danger',
                        alertTitle: 'Sorry',
                        alertMessage: 'Unable to complete the process, Try again'
                    })
                })
        }
    }

    updateState(itemCategory, id, index) {
        let newData = []
        if (itemCategory === 'gallery-images') {
            newData = this.state.gallery
            newData.splice(index, 1)
            this.setState({ gallery: newData })
        }
        else if (itemCategory === 'main-slide-images') {
            newData = this.state.mainSlide
            newData.splice(index, 1)
            this.setState({ mainSlide: newData })
        }
        else if (itemCategory === 'page-images') {
            newData = this.state.pageImages
            newData.splice(index, 1)
            this.setState({ pageImages: newData })
        }
        else if (itemCategory === 'requests') {
            newData = this.state.requests
            newData.splice(index, 1)
            this.setState({ requests: newData })
        }
    }

    handleModel = (event) => {
        if (event.target.value === 'response') this.setState({ showResponseModal: true })
        else if (event.target.value === 'gallery') this.setState({ showAddGalleryModal: true })
        else if (event.target.value === 'mainSlide') this.setState({ showAddMainSlideModal: true })
        else if (event.target.value === 'pageImage') this.setState({ showAddPageImageModal: true })
    }

    closeModel(name) {
        if (name === 'response') this.setState({ showResponseModal: false })
        else if (name === 'gallery') this.setState({ showAddGalleryModal: false })
        else if (name === 'mainSlide') this.setState({ showAddMainSlideModal: false })
        else if (name === 'pageImage') this.setState({ showAddPageImageModal: false })
    }

    inputChanged = event => {
        this.setState({ response: event.target.value });
    }

    galleryInputChanged = event => {
        if (event.target.name === 'package') this.setState({ newGalleryImagePackage: event.target.value });
        else if (event.target.name === 'area') this.setState({ newGalleryImageArea: event.target.value });
        else if (event.target.name === 'image') {
            var checkType = event.target.value.split(".");
            checkType = checkType[checkType.length - 1]
            checkType = FILE_TYPES.includes(checkType);
            if (checkType) {
                this.setState({ newGalleryImageImage: event.target.files[0] });
            }
            else {
                this.setState({
                    alertVisible: true,
                    alertType: 'danger',
                    alertTitle: 'Sorry',
                    alertMessage: 'Only [ JPEG or PNG ] allowed'
                })
            }
        }
    }

    imageInputChanged = event => {
        var checkType = event.target.value.split(".");
        checkType = checkType[checkType.length - 1]
        checkType = FILE_TYPES.includes(checkType);
        if (checkType) {
            this.setState({ newImage: event.target.files[0] });
        }
        else {
            this.setState({
                alertVisible: true,
                alertType: 'danger',
                alertTitle: 'Sorry',
                alertMessage: 'Only [ JPEG or PNG ] allowed'
            })
        }
    }

    sendResponse = () => {
        const url = BASE_URL + '/admin/requests/'
        if (this.state.responseUser.id && this.state.response) {
            const fd = new FormData();
            fd.append('id', this.state.responseUser.id)
            fd.append('response', this.state.response)
            axios.put(url, fd, { headers: { 'Authorization': `token ${AUTH_TOKEN}` } })
                .then(response => {
                    let newData = []
                    newData = this.state.requests
                    newData.splice(this.state.responseUser.index, 1)
                    this.setState({
                        loading: false,
                        showResponseModal: false,
                        requests: newData,
                        alertVisible: true,
                        alertType: 'success',
                        alertTitle: 'Success',
                        alertMessage: 'Response successfully send to the user'
                    })
                })
                .catch(error => {
                    this.setState({
                        alertVisible: true,
                        alertType: 'danger',
                        alertTitle: 'Sorry',
                        alertMessage: 'Unable to complete the process, Try again'
                    })
                })
        }
        else {
            this.setState({
                alertVisible: true,
                alertType: 'danger',
                alertTitle: 'Sorry',
                alertMessage: 'Invalid Response data'
            })
        }
    }

    addGallery = () => {
        const fd = new FormData();
        if (this.state.newGalleryImageImage && this.state.newGalleryImageArea && this.state.newGalleryImagePackage) {
            fd.append('image', this.state.newGalleryImageImage, this.state.newGalleryImageImage.name)
            fd.append('package', this.state.newGalleryImagePackage)
            fd.append('henna_area', this.state.newGalleryImageArea)
            if (!AUTH_TOKEN) window.location.replace("/lavanyashenna/admin/login");
            else {
                const url = BASE_URL + '/admin/gallery-images/'
                axios.post(url, fd, { headers: { 'Authorization': `token ${AUTH_TOKEN}` } })
                    .then(response => {
                        this.setState({
                            loading: false,
                            showAddGalleryModal: false,
                            newGalleryImageImage: null,
                            alertVisible: true,
                            alertType: 'success',
                            alertTitle: 'Success',
                            alertMessage: 'Gallery Image successfully added'
                        })
                    })
                    .catch(error => {
                        this.setState({
                            alertVisible: true,
                            alertType: 'danger',
                            alertTitle: 'Sorry',
                            alertMessage: 'Unable to complete the process, Try again'
                        })
                    })
            }
        }
        else {
            this.setState({
                alertVisible: true,
                alertType: 'danger',
                alertTitle: 'Sorry',
                alertMessage: 'Invalid inputs for Upload gallery image'
            })
        }
    }

    addMainSlide = () => {
        const fd = new FormData();
        if (this.state.newImage) {
            fd.append('image', this.state.newImage, this.state.newImage.name)
            if (!AUTH_TOKEN) window.location.replace("/lavanyashenna/admin/login");
            else {
                const url = BASE_URL + '/admin/main-slide-images/'
                axios.post(url, fd, { headers: { 'Authorization': `token ${AUTH_TOKEN}` } })
                    .then(response => {
                        this.setState({
                            loading: false,
                            showAddMainSlideModal: false,
                            newImage: null,
                            alertVisible: true,
                            alertType: 'success',
                            alertTitle: 'Success',
                            alertMessage: 'Main Slide Image successfully added'
                        })
                    })
                    .catch(error => {
                        this.setState({
                            alertVisible: true,
                            alertType: 'danger',
                            alertTitle: 'Sorry',
                            alertMessage: 'Unable to complete the process, Try again'
                        })
                    })
            }
        }
        else {
            this.setState({
                alertVisible: true,
                alertType: 'danger',
                alertTitle: 'Sorry',
                alertMessage: 'Please select Image'
            })
        }
    }

    addPageImage = () => {
        const fd = new FormData();
        if (this.state.newImage) {
            fd.append('image', this.state.newImage, this.state.newImage.name)
            if (!AUTH_TOKEN) window.location.replace("/lavanyashenna/admin/login");
            else {
                const url = BASE_URL + '/admin/page-images/'
                axios.post(url, fd, { headers: { 'Authorization': `token ${AUTH_TOKEN}` } })
                    .then(response => {
                        this.setState({
                            loading: false,
                            showAddPageImageModal: false,
                            newImage: null,
                            alertVisible: true,
                            alertType: 'success',
                            alertTitle: 'Success',
                            alertMessage: 'Page Image successfully added'
                        })
                    })
                    .catch(error => {
                        this.setState({
                            alertVisible: true,
                            alertType: 'danger',
                            alertTitle: 'Sorry',
                            alertMessage: 'Unable to complete the process, Try again'
                        })
                    })
            }
        }
        else {
            this.setState({
                alertVisible: true,
                alertType: 'danger',
                alertTitle: 'Sorry',
                alertMessage: 'Please select Image'
            })
        }
    }

    render() {
        return (
            <main className='dashboard'>
                {
                    (this.state.alertVisible) ? (
                        <span id='alert-message'>
                            <Alert
                                id="001"
                                type={this.state.alertType}
                                title={this.state.alertTitle}
                                message={this.state.alertMessage}
                            >
                            </Alert>
                        </span>
                    ) : null
                }
                {(!localStorage.getItem('isAuthenticated'))
                    ? <Redirect to='/lavanyashenna/admin/login'></Redirect>
                    : null
                }
                <div>
                    <div>
                        <img src={logo} alt='logo' />
                        <h6>ADMIN PAGE</h6>
                        <a href='/'><button>MY SITE</button></a>
                        <button onClick={this.ShowHandler} value='requests'>REQUESTS</button>
                        <button onClick={this.ShowHandler} value='gallery-images'>GALLERY</button>
                        <button onClick={this.ShowHandler} value='main-slide-images'>MAIN SLIDE</button>
                        <button onClick={this.ShowHandler} value='page-images'>PAGE IMAGE</button>
                        <button onClick={() => this.props.adminLogout()} id='logout'>LOGOUT</button>
                    </div>

                    <div className="main">
                        <span>
                            <button onClick={this.handleModel} value='gallery'>ADD GALLERY</button>
                            <button onClick={this.handleModel} value='mainSlide'>ADD MAIN SLIDE</button>
                            <button onClick={this.handleModel} value='pageImage'>ADD PAGE IMAGE</button>
                        </span>
                        {(() => {
                            switch (this.state.name) {
                                case "requests": return (
                                    <main id='requests'>
                                        <h4>ALL CONTACT REQUESTS</h4>
                                        <table className="table table-info table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Full Name</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Details</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.loading
                                                    ?
                                                    <>
                                                        <span id='spnner'>
                                                            <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                                                        </span>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            this.state.requests.map((item, index) => <Request {...item} itemCategory={this.state.name} index={index} key={index}
                                                                sendResponse={this.handleResponse.bind(this)}
                                                                removeFunc={this.handleDeleteFunc.bind(this)} />)
                                                        }
                                                    </>
                                                }
                                            </tbody>
                                        </table>
                                    </main>
                                );
                                case "gallery-images": return (
                                    <main id='admin-images'>
                                        <h4>ALL GALLERY IMAGES</h4>
                                        {this.state.gallery.length === 0 && !this.state.loading
                                            ?
                                            <p id='no-data'>No Image Found</p>
                                            :
                                            <>
                                                {this.state.loading
                                                    ?
                                                    <>
                                                        <span id='spnner'>
                                                            <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                                                        </span>
                                                    </>
                                                    :
                                                    <span id='item-images'>
                                                        {
                                                            this.state.gallery.map((item, index) => <Item {...item} itemCategory={this.state.name} index={index} key={index}
                                                                removeFunc={this.handleDeleteFunc.bind(this)} />)
                                                        }
                                                    </span>
                                                }
                                            </>
                                        }
                                    </main>
                                );
                                case "main-slide-images": return (
                                    <main id='admin-images'>
                                        <h4>ALL MAIN SLIDE IMAGES</h4>
                                        {this.state.mainSlide.length === 0 && !this.state.loading
                                            ?
                                            <p id='no-data'>No Image Found</p>
                                            :
                                            <>
                                                {this.state.loading
                                                    ?
                                                    <>
                                                        <span id='spnner'>
                                                            <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                                                        </span>
                                                    </>
                                                    :
                                                    <span id='item-images'>
                                                        {
                                                            this.state.mainSlide.map((item, index) => <Item {...item} itemCategory={this.state.name} index={index} key={index}
                                                                removeFunc={this.handleDeleteFunc.bind(this)} />)
                                                        }
                                                    </span>
                                                }
                                            </>
                                        }
                                    </main>
                                );
                                case "page-images": return (
                                    <main id='admin-images'>
                                        <h4>ALL PAGE IMAGES</h4>
                                        {this.state.pageImages.length === 0 && !this.state.loading
                                            ?
                                            <p id='no-data'>No Image Found</p>
                                            :
                                            <>
                                                {this.state.loading
                                                    ?
                                                    <>
                                                        <span id='spnner'>
                                                            <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                                                        </span>
                                                    </>
                                                    :
                                                    <span id='item-images'>
                                                        {
                                                            this.state.pageImages.map((item, index) => <Item {...item} itemCategory={this.state.name} index={index} key={index}
                                                                removeFunc={this.handleDeleteFunc.bind(this)} />)
                                                        }
                                                    </span>
                                                }
                                            </>
                                        }
                                    </main>
                                );
                                default: return (
                                    <main id='requests'>
                                        <h4>ALL CONTACT REQUESTS</h4>
                                        <table className="table table-info table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Full Name</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Details</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.loading
                                                    ?
                                                    <>
                                                        <span id='spnner'>
                                                            <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                                                        </span>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            this.state.requests.map((item, index) => <Request {...item} itemCategory='requests' index={index} key={index}
                                                                sendResponse={this.handleResponse.bind(this)}
                                                                removeFunc={this.handleDeleteFunc.bind(this)} />)
                                                        }
                                                    </>
                                                }
                                            </tbody>
                                        </table>
                                    </main>
                                );
                            }
                        })()}
                    </div>

                </div>

                <Modal isOpen={this.state.showAddGalleryModal} backdrop={'static'}>
                    <ModalHeader id='modal' toggle={() => this.closeModel('gallery')}>Lavanya's Henna - ADD GALLERY IMAGE</ModalHeader>
                    <ModalBody id='modal'>
                        <Form>

                            <Label for="package">Select Package</Label>
                            <Input
                                type="select"
                                name="package"
                                id="package"
                                value={this.state.newGalleryImagePackage}
                                onChange={this.galleryInputChanged}
                                required>
                                <option value=''></option>
                                <option value='cb'>Classic Bridal</option>
                                <option value='eb'>Elegant Bridal</option>
                                <option value='rb'>Royal Bridal</option>
                                <option value='sb1'>Star Bridal 1</option>
                                <option value='sb2'>Star Bridal 2</option>
                            </Input>

                            <Label for="area">Select Area</Label>
                            <Input
                                type="select"
                                name="area"
                                id="area"
                                onChange={this.galleryInputChanged}
                                required>
                                <option value=''></option>
                                <option value='h'>Hands</option>
                                <option value='f'>Foots</option>
                                <option value='o'>Others</option>
                            </Input>

                            <Label for="image">Image</Label>
                            <Input
                                type="file"
                                name="image"
                                id="image"
                                onChange={(e) => this.galleryInputChanged(e)}
                                required />

                            <br />
                            <Button color='primary' onClick={this.addGallery} block>ADD GALLERY IMAGE</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.showAddMainSlideModal} backdrop={'static'}>
                    <ModalHeader id='modal' toggle={() => this.closeModel('mainSlide')}>Lavanya's Henna - ADD MAIN SLIDE IMAGE</ModalHeader>
                    <ModalBody id='modal'>
                        <Form>
                            <Label for="image">Image</Label>
                            <Input
                                type="file"
                                name="mainSlide"
                                id="image"
                                onChange={(e) => this.imageInputChanged(e)}
                                required />
                            <br />
                            <Button color='primary' onClick={this.addMainSlide} block>ADD MAIN SLIED IMAGE</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.showAddPageImageModal} backdrop={'static'}>
                    <ModalHeader id='modal' toggle={() => this.closeModel('pageImage')}>Lavanya's Henna - ADD PAGE IMAGE</ModalHeader>
                    <ModalBody id='modal'>
                        <Form>
                            <Label for="image">Image</Label>
                            <Input
                                type="file"
                                name="pageImage"
                                id="image"
                                onChange={(e) => this.imageInputChanged(e)}
                                required />
                            <br />
                            <Button color='primary' onClick={this.addPageImage} block>ADD PAGE IMAGE</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.showResponseModal} backdrop={'static'}>
                    <ModalHeader id='modal' toggle={() => this.closeModel('response')}>Lavanya's Henna - SEND RESPONSE</ModalHeader>
                    <ModalBody id='modal'>
                        <Form id='response-form'>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText id='form-label'>Req ID</InputGroupText>
                                </InputGroupAddon>
                                <Input id='form-input' value={this.state.responseUser.id} readOnly />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText id='form-label'>Name</InputGroupText>
                                </InputGroupAddon>
                                <Input id='form-input' value={this.state.responseUser.name} readOnly />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText id='form-label'>Phone</InputGroupText>
                                </InputGroupAddon>
                                <Input id='form-input' value={this.state.responseUser.phone} readOnly />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText id='form-label'>Email</InputGroupText>
                                </InputGroupAddon>
                                <Input id='form-input' value={this.state.responseUser.email} readOnly />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText id='form-label'>Request</InputGroupText>
                                </InputGroupAddon>
                                <Input id='form-input' type='textarea' value={this.state.responseUser.details} readOnly />
                            </InputGroup>

                            <Label>Response *</Label>
                            <Input
                                id='response'
                                type='textarea'
                                value={this.state.response}
                                onChange={this.inputChanged}
                                placeholder="Response for User's Request"
                                required
                            />
                            <br />
                            <Button className='login-form__button' color='primary' onClick={this.sendResponse} block>SEND RESPONSE</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </main>
        );
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        adminLogout: () => dispatch(adminLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);