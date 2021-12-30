import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './styles.css';


const EditScoutingReport = () => {
    const { state } = useLocation(); 
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setData(state);
    }, [state])

    const handleSubmit = e => {
        e.preventDefault();
        const scoutingReport = {
            ...data,
            createdAt: Date.now(),
            updatedAt: Date.now() 
        };
        axios
            .post(`/update/${data._id}`, scoutingReport)
            .then(() => navigate('/'));
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="create-container">
            <div className="form-container">
                <form onSubmit={handleSubmit} onReset={handleBack}>
                    <div className="row d-flex justify-content-between" style={{ paddingRight: 24, marginBottom: 30 }}>
                        <h4>Edit Scouting Report</h4>
                        <Link to='/'>
                            <button className="btn btn-outline-primary">Browse</button>
                        </Link>
                    </div>
                    <div className="row" style={{ paddingLeft: 25, paddingRight: 25 }}>
                        <div className="col">
                            <h6 className='column-name'>Player Information</h6>
                            <label className="create-label">Player Name </label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.name || ''}
                                onChange={e => setData({ ...data, name: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Position </label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.position || ''}
                                onChange={e => setData({ ...data, position: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Team </label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.team || ''}
                                onChange={e => setData({ ...data, team: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Overall Grade</label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.grade || ''}
                                onChange={e => setData({ ...data, grade: e.target.value })}
                            />
                            <br />
                        </div>
                        <div className="col">
                            <h6 className='column-name'>Hitting Grades</h6>
                            <label className="create-label">Hit </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.hit || ''}
                                onChange={e => setData({ ...data, hit: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Power </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.power || ''}
                                onChange={e => setData({ ...data, power: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Run </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.run || ''}
                                onChange={e => setData({ ...data, run: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Field </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.field || ''}
                                onChange={e => setData({ ...data, field: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Throw </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.throw || ''}
                                onChange={e => setData({ ...data, throw: e.target.value })}
                            />
                            <br />
                        </div>
                        <div className="col">
                            <h6 className='column-name'>Pitching Grades</h6>
                            <label className="create-label">Fastball </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.fastball || ''}
                                onChange={e => setData({ ...data, fastball: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Curveball </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.curveball || ''}
                                onChange={e => setData({ ...data, curveball: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Slider </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.slider || ''}
                                onChange={e => setData({ ...data, slider: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Changeup </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.changeup || ''}
                                onChange={e => setData({ ...data, changeup: e.target.value })}
                            />
                            <br />
                            <label className="create-label">Control </label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.control || ''}
                                onChange={e => setData({ ...data, control: e.target.value })}
                            />
                            <br />
                        
                            <div className="col text-right" style={{ width: 210, marginTop: 10 }}>
                                <button type="reset" className="btn btn-primary mr-3">Back</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EditScoutingReport;