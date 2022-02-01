import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import useTransactions from '../../hooks/useTransactions';
import styles from './DoughnutChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ title}) => {
  const { total, chartData } = useTransactions(title);


  return (
    <div className={title === 'Expense' ? styles.containr : styles.containl}>   
        <h3 className={styles.title}>{title}</h3>
        <h4 className={title === 'Expense' ? styles.expense : styles.income}>${total}</h4>
        <div className={styles.cover}>
          <Doughnut data={chartData} className={styles.canvas}/>
        </div>              
    </div>
  );
};

export default DoughnutChart;