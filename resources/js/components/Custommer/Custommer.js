import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import ReactPaginate from "react-paginate";
import "./../css/css.css";

class Custommer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0,
            msg: null,
            type: null,
            flash: false,
            alert: null
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    hideAlert() {
        this.setState({
            alert: null
        });
    }
    receivedData() {
        axios.get("/api/user").then(res => {
            const data = res.data.result;
            const slice = data.slice(
                this.state.offset,
                this.state.offset + this.state.perPage
            );
            const postData = slice.map((pd, i) => (
                <React.Fragment>
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{pd.nama}</td>
                        <td>{pd.email}</td>
                        <td>{pd.jeniskelamin}</td>
                        <td>{pd.perkawinan}</td>
                        <td>{pd.alamat}</td>
                        <td width="200" className="text-center">
                            <div className="btn-group">
                                <Link
                                    className="btn btn-success"
                                    to={`/user/update/${pd.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => this.confirmDelete(pd.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </React.Fragment>
            ));

            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                postData
            });
        });
    }
    handlePageClick(e) {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState(
            {
                currentPage: selectedPage,
                offset: offset
            },
            () => {
                this.receivedData();
            }
        );
    }

    goToHome() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess()}
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
            >
                Deleted article successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    confirmDelete(id) {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus Deh"
                cancelBtnText="Nggak Jadi"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                Kalau udah dihapus, nggak bakal balik lagi.
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    deleteItem(id) {
        axios.delete(`/api/user/delete/${id}`).then(response => {
            var msg = response.data.status.response;
            if (msg == "sukses") {
                this.hideAlert();
                this.goToHome();
            }
        });
    }

    onSuccess() {
        this.componentDidMount();
        this.hideAlert();
    }

    componentDidMount() {
        this.receivedData();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            Welcome
                        </Link>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Beranda
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">User</div>
                                <div className="card-body">
                                    <Link
                                        className="btn btn-primary btn-sm mb-3"
                                        to="/user/create"
                                    >
                                        Create
                                    </Link>
                                    <div className="box-body">
                                        <table
                                            id="demo"
                                            className="table table-bordered table-hover"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama</th>
                                                    <th>Email</th>
                                                    <th>Gendre</th>
                                                    <th>Status</th>
                                                    <th>Alamati</th>
                                                    <th
                                                        width="200"
                                                        className="text-center"
                                                    >
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>{this.state.postData}</tbody>
                                        </table>
                                        <ReactPaginate
                                            previousLabel={"prev"}
                                            nextLabel={"next"}
                                            breakLabel={"..."}
                                            breakClassName={"break-me"}
                                            pageCount={this.state.pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={"pagination"}
                                            subContainerClassName={
                                                "pages pagination"
                                            }
                                            activeClassName={"active"}
                                        />
                                        {this.state.alert}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Custommer;
