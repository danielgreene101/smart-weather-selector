import React from 'react';
import { dbzLevels } from './dbzLevels';


class DbzWeatherSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverColorPicker: null,
            open: false,
            weatherSensitivityValue: 0
        };
    }

    weatherSensitivityUpdate = (value, label) => {
        this.setState({ weatherSensitivityValue: value });
        this.setState({ weatherSensitivityLabel: label });
    };


    hoverEnter = value => this.setState({ hoverColorPicker: value });

    hoverExit = () => this.setState({ hoverColorPicker: null });

    render() {
        const currentSettingLabel = dbzLevels.find(dbz => dbz.value === this.state.weatherSensitivityValue);
        const validDbzLevals = dbzLevels.filter(dbz => dbz.value > 0);

        const levels = [
            { value: 'Low' },
            { value: 'Medium' },
            { value: 'High' },
        ];

        return (
            <div style={{ margin: '16px 0px' }}>
                <div style={{ fontSize: 12 }}>
                    Weather Intensity
                </div>
                <div style={{ marginBottom: 5, display: 'flex', alignItems: 'center' }}>
                    Currently Selected:&nbsp;<div style={{
                    width: '20px', height: '20px', backgroundColor: currentSettingLabel.style, borderRadius: 50, border: '1px solid black',
                }} /> &nbsp;{currentSettingLabel.value} - {currentSettingLabel.label}
                </div>
                <div style={{
                    height: '20px', display: 'flex', alignItems: 'center', marginTop: 8,
                }}>
                    {validDbzLevals.map(dbz => (<div
                        onClick={() => this.weatherSensitivityUpdate(dbz.value, dbz.label)}
                        onMouseEnter={() => this.hoverEnter(dbz.value)}
                        onMouseLeave={this.hoverExit}
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            flex: '0 1 50px',
                        }}
                        key={dbz.value}>
                        {dbz.value}
                    </div>))}
                </div>
                <div style={{ height: '20px', display: 'flex', alignItems: 'center' }}>
                    {validDbzLevals.map(dbz => (<div
                        onClick={() => this.weatherSensitivityUpdate(dbz.value, dbz.label)}
                        onMouseEnter={() => this.hoverEnter(dbz.value)}
                        onMouseLeave={this.hoverExit}
                        style={{
                            background: dbz.style,
                            width: '100%',
                            height: '20px',
                            cursor: 'pointer',
                            flex: '0 1 50px',
                            border: 'solid black',
                            borderWidth: this.props.value !== dbz.value ? '1px 1px 1px 0px': '0px 1px 0px 0px',
                            borderRadius: dbz.value === 5 ? '10px 0px 0px 10px' : dbz.value === 75 ? '0px 10px 10px 0px' : '0px',
                            boxShadow: this.props.value === dbz.value ? '0px 0px 15px black': null,
                            opacity: this.state.hoverColorPicker === dbz.value ? 0.8 : 1,
                            overflow: 'hidden',
                        }}
                        key={dbz.value} />))}
                </div>
                <div style={{
                    height: '20px', display: 'flex', alignItems: 'center', marginBottom: 8,
                }}>
                    {levels.map(lev => (<div style={{
                            width: '100%',
                            height: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            flex: '0 1 266.7px',
                        }}
                                             key={lev.value}>{lev.value}</div>),
                    )}
                </div>
                <a href="https://en.wikipedia.org/wiki/DBZ_(meteorology)" target="_blank" style={{ fontSize: 14 }}> What is the dBZ scale? </a>
            </div>
        );
    }
}
export default DbzWeatherSelector;

