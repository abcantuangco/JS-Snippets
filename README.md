# JS-Snippets
Helpful javascript snippets

## dataSorter
It will sort array values depending in sort preference and option to add ranking.

### Default Values
#### sort
##### value: desc
#### rank
##### value: false

### Sample Usage
<code>
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

dataSorter(items, { 'keyValue': 'value', 'rank': true, 'sort': 'asc' });
</code>
