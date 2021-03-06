import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MyTheme from './MyTheme';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
}


const CenteredTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <ThemeProvider theme={MyTheme}>
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {/* 配列を受け取って<Tab>を作成 */}
                {props.labels.map(label => <Tab key={label} label={label}></Tab>)}
            </Tabs>
        </Paper>

        {/* 子のタグをもとにページのコンテンツを表示 */}
        {props.children.map((child, index) => 
            <TabPanel key={index} value={value} index={index}>{child}</TabPanel>)
        }
        </ThemeProvider>
    </div>
  );
}

export default CenteredTabs