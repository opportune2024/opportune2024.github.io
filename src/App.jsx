// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Bootcamps, Certificates, Dashboard, Externships, Internships, Jobs } from './components';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="internships" element={<Internships />} />
                    <Route path="externships" element={<Externships />} />
                    <Route path="bootcamps" element={<Bootcamps />} />
                    <Route path="certifications" element={<Certificates />} />
                    <Route path="jobs" element={<Jobs />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
