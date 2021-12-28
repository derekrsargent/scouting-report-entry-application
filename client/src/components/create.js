import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';


const CreateScoutingReport = () => {

    const [name, setName] = useState(null);
    const [position, setPosition] = useState(null);
    const [team, setTeam] = useState(null);
    const [grade, setGrade] = useState(null);
    const [hit, setHit] = useState(null);
    const [power, setPower] = useState(null);
    const [run, setRun] = useState(null);
    const [field, setField] = useState(null);
    const [_throw, setThrow] = useState(null);
    const [fastball, setFastball] = useState(null);
    const [curveball, setCurveball] = useState(null);
    const [slider, setSlider] = useState(null);
    const [changeup, setChangeup] = useState(null);
    const [control, setControl] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const newScoutingReport = {
            name,
            position,
            team,
            grade,
            hit,
            power,
            run,
            field,
            _throw,
            fastball,
            curveball,
            slider,
            changeup,
            control,
            createdAt: Date.now()
        };

        axios
            .post('/create', newScoutingReport)
            .then(() => navigate('/'));
    };

    const handleClear = () => {
        setName(null);
        setPosition(null);
        setTeam(null);
        setGrade(null);
        setHit(null);
        setPower(null);
        setRun(null);
        setField(null);
        setThrow(null);
        setFastball(null);
        setCurveball(null);
        setSlider(null);
        setChangeup(null);
        setControl(null);
    };

    return (
        <div className="create-container">
            <div className="form-container">
                <form onSubmit={handleSubmit} onReset={handleClear}>
                    <div className="row d-flex justify-content-between" style={{ paddingRight: 24, marginBottom: 30 }}>
                        <h4>Create Scouting Report</h4>
                        <Link to='/'>
                            <button className="btn btn-outline-primary">Browse</button>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6 className='column-name'>Player Information</h6>
                            <label className="create-label">Player Name </label>
                            <input
                                type="text"
                                className="form-control"
                                value={name || ''}
                                onChange={e => setName(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Position </label>
                            <input
                                type="text"
                                className="form-control"
                                value={position || ''}
                                onChange={e => setPosition(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Team </label>
                            <input
                                type="text"
                                className="form-control"
                                value={team || ''}
                                onChange={e => setTeam(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Overall Grade</label>
                            <input
                                type="number"
                                className="form-control"
                                value={grade || ''}
                                onChange={e => setGrade(e.target.value)}
                            />
                            <br />
                        </div>
                        <div className="col">
                            <h6 className='column-name'>Hitting Grades</h6>
                            <label className="create-label">Hit </label>
                            <input
                                type="number"
                                className="form-control"
                                value={hit || ''}
                                onChange={e => setHit(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Power </label>
                            <input
                                type="number"
                                className="form-control"
                                value={power || ''}
                                onChange={e => setPower(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Run </label>
                            <input
                                type="number"
                                className="form-control"
                                value={run || ''}
                                onChange={e => setRun(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Field </label>
                            <input
                                type="number"
                                className="form-control"
                                value={field || ''}
                                onChange={e => setField(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Throw </label>
                            <input
                                type="number"
                                className="form-control"
                                value={_throw || ''}
                                onChange={e => setThrow(e.target.value)}
                            />
                            <br />
                        </div>
                        <div className="col">
                            <h6 className='column-name'>Pitching Grades</h6>
                            <label className="create-label">Fastball </label>
                            <input
                                type="number"
                                className="form-control"
                                value={fastball || ''}
                                onChange={e => setFastball(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Curveball </label>
                            <input
                                type="number"
                                className="form-control"
                                value={curveball || ''}
                                onChange={e => setCurveball(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Slider </label>
                            <input
                                type="number"
                                className="form-control"
                                value={slider || ''}
                                onChange={e => setSlider(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Changeup </label>
                            <input
                                type="number"
                                className="form-control"
                                value={changeup || ''}
                                onChange={e => setChangeup(e.target.value)}
                            />
                            <br />
                            <label className="create-label">Control </label>
                            <input
                                type="number"
                                className="form-control col-md-8 "
                                value={control || ''}
                                onChange={e => setControl(e.target.value)}
                            />
                            <br />
                        
                            <div className="col text-right" style={{ width: 210, marginTop: 10 }}>
                            <button type="submit" className="btn btn-primary mr-3">Submit</button>
                            <button type="reset" className="btn btn-primary">Clear</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CreateScoutingReport;