import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

function CabinTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField={'discount'}
          options={[
            { value: 'all', label: 'All' },
            { value: 'with-discount', label: 'With discount' },
            { value: 'no-discount', label: 'No discount' },
          ]}
        />
      </TableOperations>
    </div>
  );
}

export default CabinTableOperations;
