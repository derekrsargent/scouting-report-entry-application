import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md";
import axios from 'axios';
import './styles.css';


const BrowseScoutingReports = () => {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchValueState, setSearchValueState] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('/browse')
            .then((response) => {
                setData(response.data);
            })
    }, []);

    useEffect(() => {
        data && setFilteredData(data.filter(
            player => player.name !== null && 
                player.name.toLowerCase().includes(searchValueState.toLowerCase()))
        );
    }, [searchValueState, data]);

    const handleSearch = (e) => {
        e.preventDefault(); 
        setSearchValueState(e.target.value);
    };

    const handleDelete = (id) => {
        axios
            .post(`/delete/${id}`)
            .then(setData(prevState => prevState.filter(el => el._id !== id)));
    };

    const handleEdit = (id) => {
        const editData = data.filter(el => el._id === id);
        navigate('/edit', { state: editData[0] });
    };

    const DisplayScoutingReport = ({ report }) => (
        <div className="player-container">
            <div className="row d-flex justify-content-between" style={{ width: 525 }}>
                <p className="browse-field-name"><b>Name:</b> {report.name}</p>
                <div>
                    <button 
                        className="edit-delete-button" 
                        style={{ outline: 'none', marginRight: 5 }} 
                        onClick={() => handleEdit(report._id)}
                    >
                        <MdEdit size={20} />
                    </button>
                    <button 
                        className="edit-delete-button" 
                        style={{ outline: 'none' }} 
                        onClick={() => handleDelete(report._id)}
                    >
                        <MdDelete size={20} />
                    </button>
                </div>
            </div>
            <p className="browse-field"><b>Position:</b>  {report.position}</p>
            <p className="browse-field"><b>Team:</b>  {report.team}</p>
            <p className="browse-field"><b>Overall Grade:</b>  {report.grade}</p>

            <div className="row">
                {report.hit && <p className="browse-grade"><b>HIT:</b>  {report.hit} <b> | </b></p>}
                {report.power && <p className="browse-grade"><b>POWER:</b>  {report.power} <b>|</b></p>}
                {report.run && <p className="browse-grade"><b>RUN:</b>  {report.run} <b>|</b></p>}
                {report.field && <p className="browse-grade"><b>FIELD:</b>  {report.field} <b>|</b></p>}
                {report.throw && <p className="browse-grade"><b>THROW:</b>  {report.throw}</p>}
            </div>

            <div className="row">
                {report.fastball && <p className="browse-grade"><b>FASTBALL:</b>  {report.fastball} <b>|</b></p>}
                {report.curveball && <p className="browse-grade"><b>CURVEBALL:</b>  {report.curveball} <b>|</b></p>}
                {report.slider && <p className="browse-grade"><b>SLIDER:</b>  {report.slider} <b>|</b></p>}
                {report.changeup && <p className="browse-grade"><b>CHANGEUP:</b>  {report.changeup} <b>|</b></p>}
                {report.control && <p className="browse-grade"><b>CONTROL:</b>  {report.control}</p>}
            </div>
        </div>
    );

    return (
        <div className="browse-container">
            <div className="form-container">
                <div className="row d-flex justify-content-between" style={{ paddingRight: 24 }}>
                    <h4>Browse Scouting Reports</h4>
                    <Link to='/create'>
                        <button className="btn btn-outline-primary">Create</button>
                    </Link>
                </div>
                <input 
                    type="text" 
                    placeholder={"Search player's name"}
                    value={searchValueState || ''} 
                    onChange={handleSearch} 
                    style={{ 
                        width: 300, 
                        marginTop: 8, 
                        paddingLeft: 12, 
                        borderRadius: 15, 
                        borderStyle: 'solid', 
                        borderColor: 'darkgrey' 
                    }}
                />
                {
                    filteredData && 
                    filteredData.length > 0 && 
                    filteredData.map(report => <DisplayScoutingReport report={report} key={report._id} />)
                }
                {
                    filteredData && 
                    filteredData.length <= 0 && 
                    <p style={{fontSize: 14, marginTop: 30, marginLeft: 8}}><b>No results found.</b></p>
                }
            </div>
        </div>
    )
};

export default BrowseScoutingReports;
