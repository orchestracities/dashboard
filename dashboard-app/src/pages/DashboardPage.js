import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
{
  id: 0,
  name: "Average SO2",
  vizState: {
    query: {
      "measures": ["AirQualityObserved.avgSO2"],
      "timeDimensions": [{
        "dimension": "AirQualityObserved.dateobserved"
      }],
      "order": {}
    },
    chartType: "number"
  }
}, {
  id: 1,
  name: "Average NO2",
  vizState: {
    query: {
      "measures": ["AirQualityObserved.avgNO2"],
      "timeDimensions": [{
        "dimension": "AirQualityObserved.dateobserved"
      }],
      "order": {}
    },
    chartType: "number"
  }
}, {
  id: 2,
  name: "Average SO2 per sensor",
  vizState: {
    query: {
      "measures": ["AirQualityObserved.avgSO2"],
      "timeDimensions": [{
        "dimension": "AirQualityObserved.dateobserved",
        "granularity": "hour"
      }],
      "order": {
        "AirQualityObserved.avgSO2": "desc"
      },
      "dimensions": ["AirQualityObserved.entityId"]
    },
    chartType: "line"
  }
}, {
  id: 3,
  name: "Average NO2 per sensor",
  vizState: {
    query: {
      "measures": ["AirQualityObserved.avgNO2"],
      "timeDimensions": [{
        "dimension": "AirQualityObserved.dateobserved",
        "granularity": "hour"
      }],
      "order": {
        "AirQualityObserved.avgNO2": "desc"
      },
      "dimensions": ["AirQualityObserved.entityId"]
    },
    chartType: "line"
  }
} 
];

const DashboardPage = () => {
  const dashboardItem = item => <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>;

  const Empty = () => <div style={{
    textAlign: 'center',
    padding: 12
  }}>
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>;

  return DashboardItems.length ? <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard> : <Empty />;
};

export default DashboardPage;