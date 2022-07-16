/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import CurrentOrders from './CurrentOrders';
import { gridSpacing } from 'store/constant';
import CurrentLocations from './CurrentLocations';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        <CurrentOrders isLoading={isLoading} />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        <CurrentLocations isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
