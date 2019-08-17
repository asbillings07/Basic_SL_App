import React from 'react';
import Table from 'react-bootstrap/Table';

const Frequency = ({ email }) => {
  // grabs the email via props and gets all the chars from the emails
  const str = email.join('').split('');

  /**Function @param(String) */
  const frequencyOfLetters = letters => {
    let mapObj = {};

    letters.map(letter => {
      if (mapObj[letter]) {
        mapObj[letter].push(letter);
      } else {
        mapObj[letter] = [letter];
      }
    });

    return Object.entries(mapObj).map((keyName, i) => (
      <tbody key={i}>
        <tr>
          <td>{keyName[0]}</td>
          {console.log(keyName)}
          <td>{keyName[1].length}</td>
        </tr>
      </tbody>
    ));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Letter</th>
          <th>Frequency</th>
        </tr>
      </thead>
      {frequencyOfLetters(str)}
    </Table>
  );
};

export default Frequency;
