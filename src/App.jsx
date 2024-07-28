// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Internships from './components/Internships';
import Externships from './components/Externships';
import Bootcamps from './components/Bootcamps';
import Certifications from './components/Certifications';
import Jobs from './components/Jobs';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="internships" element={<Internships />} />
                    <Route path="externships" element={<Externships />} />
                    <Route path="bootcamps" element={<Bootcamps />} />
                    <Route path="certifications" element={<Certifications />} />
                    <Route path="jobs" element={<Jobs />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
