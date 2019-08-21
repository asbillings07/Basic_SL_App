import React from 'react';
import Table from 'react-bootstrap/Table';

const Frequency = ({ email }) => {
  // grabs the email via props and gets all the chars from the emails
  const str = email.join('').split('');

  /**Function @param(String) */
  const frequencyOfLetters = letters => {
    let mapObj = {};

    // loops over each letter and checks if it exists in the obj, if it does it adds the letter as a value in an array if it doesn't it adds it as a key.
    letters.map(letter => {
      if (mapObj[letter]) {
        mapObj[letter].push(letter);
      } else {
        mapObj[letter] = [letter];
      }
      return mapObj;
    });

    return Object.entries(mapObj) // will give us an array
      .sort((a, b) => b[1].length - a[1].length) // sorts the array by length in DESC order
      .map((
        key,
        i // maps over the new array and gives us the keys and values
      ) => (
        <tbody key={i} data-testid="key-id">
          <tr>
            <td data-testid="key-letter">{key[0]}</td>
            <td data-testid="key-number">{key[1].length}</td>
          </tr>
        </tbody>
      ));
  };

  return (
    <Table striped bordered hover style={{ textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Character</th>
          <th>Frequency</th>
        </tr>
      </thead>
      {frequencyOfLetters(str)}
    </Table>
  );
};

export default Frequency;
