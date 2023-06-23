import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LedgerStatement = () => {
  const [balance, setBalance] = useState(0);
  const [statementData, setStatementData] = useState([]);
  const [showPreviousYear, setShowPreviousYear] = useState(false);

  // Simulated fetch statement data
  useEffect(() => {
    // Fetch and set the statement data here
    const statementData = [
      // Sample statement data
      {
        id: 1,
        date: '2023-01-01',
        description: 'Transaction 1',
        status: 'Success',
        credit: 100,
        debit: 0,
        closingBalance: 100,
      },
      {
        id: 2,
        date: '2023-01-02',
        description: 'Transaction 2',
        status: 'Success',
        credit: 0,
        debit: 50,
        closingBalance: 50,
      },
      // ... more statement data
    ];

    setStatementData(statementData);
  }, []);

  const handleRequestPreviousYearBalance = () => {
    // Fetch and update the previous year's balance here
    const previousYearBalance = 500; // Sample previous year balance

    setBalance(previousYearBalance);
    setShowPreviousYear(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>
        {showPreviousYear ? 'Previous Year Balance: ' : 'Current Year Balance: '}
        {balance}
      </Text>

      <View style={styles.totalContainer}>
        <Text>Total Credit: xxx</Text>
        <Text>Total Debit: xxx</Text>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>S.No</Text>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Trnx Id</Text>
        <Text style={styles.headerText}>Description</Text>
        <Text style={styles.headerText}>Status</Text>
        <Text style={styles.headerText}>Credit</Text>
        <Text style={styles.headerText}>Debit</Text>
        <Text style={styles.headerText}>Closing Bal</Text>
      </View>

      {statementData.map((item) => (
        <View key={item.id} style={styles.rowContainer}>
          <Text style={styles.rowText}>{item.id}</Text>
          <Text style={styles.rowText}>{item.date}</Text>
          <Text style={styles.rowText}>{item.trnxId}</Text>
          <Text style={styles.rowText}>{item.description}</Text>
          <Text style={styles.rowText}>{item.status}</Text>
          <Text style={styles.rowText}>{item.credit}</Text>
          <Text style={styles.rowText}>{item.debit}</Text>
          <Text style={styles.rowText}>{item.closingBalance}</Text>
        </View>
      ))}

      {!showPreviousYear && (
        <TouchableOpacity
          style={styles.requestBalanceButton}
          onPress={handleRequestPreviousYearBalance}
        >
          <Text style={styles.requestBalanceText}>Request Previous Year Balance</Text>
        </TouchableOpacity>
      )}

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Excel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
  },
  requestBalanceButton: {
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  requestBalanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  downloadButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LedgerStatement;
