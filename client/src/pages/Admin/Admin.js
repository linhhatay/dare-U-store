// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import classNames from 'classnames/bind';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Table from 'react-bootstrap/Table';

// import styles from './Admin.module.scss';
// import { create, get } from '~/redux/productSlice';

// const cx = classNames.bind(styles);

// function Admin() {
//     const [image, setImage] = useState('');
//     const [name, setName] = useState('');
//     const [oldPrice, setOldPrice] = useState('');
//     const [newPrice, setNewPrice] = useState('');
//     const [color, setColor] = useState('');
//     const [amount, setAmount] = useState('');
//     const [description, setDescription] = useState('');

//     const dispatch = useDispatch();

//     const handleSubmit = () => {
//         const data = {
//             image,
//             name,
//             oldPrice,
//             newPrice,
//             color,
//             amount,
//             description,
//         };

//         dispatch(create(data));
//     };

//     return (
//         // <>
//         //     <Navbar bg="light" expand="lg">
//         //         <Container>
//         //             <Navbar.Brand href="#home">DareU Store</Navbar.Brand>
//         //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         //             <Navbar.Collapse id="basic-navbar-nav">
//         //                 <Nav className="me-auto">
//         //                     <Nav.Link href="#home">Trang chủ</Nav.Link>
//         //                     <Nav.Link href="#link">Đăng sản phẩm</Nav.Link>
//         //                     <Nav.Link href="#link">Quản lí</Nav.Link>
//         //                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         //                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         //                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         //                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         //                         <NavDropdown.Divider />
//         //                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         //                     </NavDropdown>
//         //                 </Nav>
//         //             </Navbar.Collapse>
//         //         </Container>
//         //     </Navbar>
//         //     <Table striped bordered hover>
//         //         <thead>
//         //             <tr>
//         //                 <th>#</th>
//         //                 <th>First Name</th>
//         //                 <th>Last Name</th>
//         //                 <th>Username</th>
//         //             </tr>
//         //         </thead>
//         //         <tbody>
//         //             <tr>
//         //                 <td>1</td>
//         //                 <td>Mark</td>
//         //                 <td>Otto</td>
//         //                 <td>@mdo</td>
//         //             </tr>
//         //             <tr>
//         //                 <td>2</td>
//         //                 <td>Jacob</td>
//         //                 <td>Thornton</td>
//         //                 <td>@fat</td>
//         //             </tr>
//         //             <tr>
//         //                 <td>3</td>
//         //                 <td colSpan={2}>Larry the Bird</td>
//         //                 <td>@twitter</td>
//         //             </tr>
//         //         </tbody>
//         //     </Table>
//         // </>
//         <div className={cx('wrapper')}>
//             <h1 className={cx('heading')}>Đăng sản phẩm</h1>
//             <div className={cx('form-group')}>
//                 <label>Ảnh sản phẩm</label>
//                 <input
//                     value={image}
//                     type="text"
//                     placeholder="Nhập url ảnh sản phẩm ..."
//                     onChange={(e) => setImage(e.target.value)}
//                 />
//             </div>
//             <div className={cx('form-group')}>
//                 <label>Tên sản phẩm</label>
//                 <input
//                     value={name}
//                     type="text"
//                     placeholder="Nhập tên sản phẩm ..."
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>
//             <div className={cx('form-group')}>
//                 <label>Giá cũ</label>
//                 <input
//                     value={oldPrice}
//                     type="text"
//                     placeholder="Nhập giá cũ ..."
//                     onChange={(e) => setOldPrice(e.target.value)}
//                 />
//             </div>
//             <div className={cx('form-group')}>
//                 <label>Giá mới</label>
//                 <input
//                     value={newPrice}
//                     type="text"
//                     placeholder="Nhập giá mới ..."
//                     onChange={(e) => setNewPrice(e.target.value)}
//                 />
//             </div>
//             <div className={cx('form-group')}>
//                 <label>Màu sắc</label>
//                 <input
//                     value={color}
//                     type="text"
//                     placeholder="Nhập màu sắc sản phẩm ..."
//                     onChange={(e) => setColor(e.target.value)}
//                 />
//             </div>
//             <div className={cx('form-group')}>
//                 <label>Số lượng</label>
//                 <input
//                     value={amount}
//                     type="text"
//                     placeholder="Nhập số lượng sản phẩm ..."
//                     onChange={(e) => setAmount(e.target.value)}
//                 />
//             </div>
//             <div className={cx('form-group')}>
//                 <label>Mô tả</label>
//                 <input
//                     value={description}
//                     type="text"
//                     placeholder="Nhập mô tả sản phẩm ..."
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//             </div>
//             <button className={cx('btn-submit')} onClick={handleSubmit}>
//                 Đăng
//             </button>
//         </div>
//     );
// }

// export default Admin;
