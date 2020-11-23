cube(`AirQualityObserved`, {

  sql: `SELECT * FROM mtekz.etairqualityobserved`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [entityId, dateobserved, location]
    },
    avgSO2: {
      sql: `avg(so2)`,
      type: `number`,
      drillMembers: [entityId, dateobserved, location]
    },
    avgNO2: {
      sql: `avg(no2)`,
      type: `number`,
      drillMembers: [entityId, dateobserved, location]
    }
  },
  
  dimensions: {
    address: {
      sql: `address`,
      type: `string`
    },
    
    location: {
      type: `geo`,
        latitude: {
          sql: `ST_X(location)`,
        },
        longitude: {
          sql: `ST_Y(location)`
        }
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    refdevice: {
      sql: `refdevice`,
      type: `string`
    },
    
    dataprovider: {
      sql: `dataprovider`,
      type: `string`
    },
    
    entityId: {
      sql: `entity_id`,
      type: `string`
    },
    
    dateobserved: {
      sql: `dateobserved`,
      type: `time`
    }
  }
});
