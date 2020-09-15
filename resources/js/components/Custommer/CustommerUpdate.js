import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class CostummerUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            gender: "",
            status: "",
            address: "",
            alert: null,
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.hendleUserUpdate = this.hendleUserUpdate.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleGender(event) {
        this.setState({ gender: event.target.value });
        console.log(event.target.value);
    }

    handleStatus(event) {
        this.setState({ status: event.target.value });
        console.log(event.target.value);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        axios.get(`/api/user/show/${id}`).then(response => {
            this.setState({
                name: response.data.result.nama,
                email: response.data.result.email,
                status: response.data.result.perkawinan,
                gender: response.data.result.jeniskelamin,
                address: response.data.result.alamat
            });
        });
    }

    hendleUserUpdate(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            status: this.state.status,
            address: this.state.address
        };
        console.log(user);
        const id = this.props.match.params.id;
        axios.post(`/api/user/update/${id}`, user).then(res => {
            var msg = res.data.status.response;
            if (msg == "sukses") {
                return this.goToHome();
            }
        });
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
                Update kategori successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push("/");
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            );
        }
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
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Update</div>
                                <div className="card-body">
                                    <form onSubmit={this.hendleUserUpdate}>
                                        <div className="form-group">
                                            <label htmlFor="nama">Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className={`form-control ${
                                                    this.hasErrorFor("name")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="name"
                                                value={this.state.name}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("name")}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                id="email"
                                                type="text"
                                                className={`form-control ${
                                                    this.hasErrorFor("email")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="email"
                                                value={this.state.email}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("email")}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                className={`form-control ${
                                                    this.hasErrorFor("password")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="password"
                                                value={this.state.password}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("password")}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="gender">
                                                Gender
                                            </label>
                                            <select
                                                className={`form-control ${
                                                    this.hasErrorFor("gender")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={this.state.gender}
                                                onChange={this.handleGender}
                                            >
                                                <option value="male">
                                                    Pria
                                                </option>
                                                <option value="female">
                                                    Wanita
                                                </option>
                                            </select>
                                            {this.renderErrorFor("gender")}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="status">
                                                Status
                                            </label>
                                            <select
                                                className={`form-control ${
                                                    this.hasErrorFor("status")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={this.state.status}
                                                onChange={this.handleStatus}
                                            >
                                                <option value="single">
                                                    Lajang
                                                </option>
                                                <option value="meried">
                                                    Menikah
                                                </option>
                                                <option value="divorce">
                                                    Berpisah
                                                </option>
                                            </select>
                                            {this.renderErrorFor("status")}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">
                                                Address
                                            </label>
                                            <textarea
                                                id="address"
                                                className={`form-control ${
                                                    this.hasErrorFor("address")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="address"
                                                value={this.state.address}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("address")}
                                        </div>
                                        <Link
                                            className="btn btn-secondary"
                                            to={`/`}
                                        >
                                            Back
                                        </Link>
                                        &nbsp; &nbsp;
                                        <button className="btn btn-primary">
                                            Create
                                        </button>
                                        {this.state.alert}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CostummerUpdate;
