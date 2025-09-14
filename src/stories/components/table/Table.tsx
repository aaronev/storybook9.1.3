import React from 'react';

import { Checkbox } from '../checkbox/Checkbox';
import { Anchor } from '../anchor/Anchor';

import './table.css';

export interface TableProps {
  /**  table's caption content*/
  caption: string,
  /**  table's column content*/
  columns: [],
  /**  table's data content*/
  data: [],
  /**  table's configuration for selectable rows*/
  selectable: boolean,
  /**  table's configuration for downloadable rows*/
  downloadable: boolean,
}

/** Primary UI component for user interaction */
export const Table = ({
  caption,
  columns,
  data,
  selectable,
  downloadable,
  ...props
}: TableProps) => {
  const tableRef = React.useRef(null);
  const selectAllRef = React.useRef(null);
  const announceRef = React.useRef(null);
  const [selectAllHint, setSelectAllHint] = React.useState('No items selected');

  const announce = (msg) => {
    announceRef.current.innerText = msg;
    setTimeout(() => {announceRef.current.innerText = '' }, 500);
  };

  const getSelected = () => {
    return [...tableRef.current.querySelectorAll('[type=checkbox]:checked')];
  };

  return (
    <div>
      <div class="toolbar">
        <span ref={announceRef} class="visually-hidden" aria-live="polite"></span>
        {
        selectable && <Checkbox class="select-all-comp" ref={selectAllRef} hintId="select-all-hint" hint={selectAllHint} label="Select All Available Items" onClick={ (e) => {
          const allAvail = [...tableRef.current.querySelectorAll('[type=checkbox]:not(:disabled)')];
          allAvail.forEach(el => el.checked = e.target.checked);
          allAvail.forEach(el => { e.target.checked ? el.closest('tr').classList.add('selected') :   el.closest('tr').classList.remove('selected'); })
          const hint = e.target.checked ? `${allAvail.length} items selected` : 'No items selected';
          setSelectAllHint(hint);
          announce( e.target.checked ? `all available items selected, ${hint}` : `all available items not selected, ${hint}`);
        }}/>
        }
        {downloadable && <Anchor tabindex="0" class="download-comp" label="Download Selected Items" href="/" download onClick={() => {
          const selectedItems = getSelected().map(item => item.closest('TR'));
          const arrStrs = selectedItems.map(item => `{device: ${item.querySelector('.device').innerText}, path: ${item.querySelector('.path').innerText}}`);
          const results = selectedItems.length < 1 ? 'No items selected!' : JSON.stringify(arrStrs);
          alert(results);
        }}/>}
      </div>
      <table ref={tableRef} {...props}>
        <caption>{caption}</caption>
        <thead><tr>
          {selectable && <th class="visually-hidden">Select</th>}
          {columns.map((col) : string | HTMLElement => <th>{col}</th>)}
        </tr></thead>
        <tbody>
          {data.map((row: {}) : HTMLElement => {

            const tdCells = [];

            for (const key in row) {
              tdCells.push(key);
            }

            return <tr>
              { 
              selectable &&
                <td>
                  <Checkbox title={row.status !== "available" ? 'Disabled Selection' :`Select ${row.name} to download`} ariaLabel={`Select ${row.name} to download`} disabled={row.status !== "available"? true : false}
                  onClick={(e) => {
                    const avail = [...tableRef.current.querySelectorAll('[type=checkbox]:not(:disabled)')];
                    const checked = getSelected();
                    
                    e.target.checked ? e.target.closest('tr').classList.add('selected') :  e.target.closest('tr').classList.remove('selected')
                    
                    selectAllRef.current.indeterminate = false;

                    setSelectAllHint('Selected ' + checked.length);
                    announce(`${row.name} ${e.target.checked ? 'selected' : 'unselected'}, ${checked.length} items selected`);

                    switch (checked.length) {
                      case 0:
                        selectAllRef.current.checked = false;
                        setSelectAllHint('No items selected');
                        announce(`${row.name} not selected, No items selected`);
                        break;
                      case avail.length:
                        selectAllRef.current.checked = true;
                        announce(`${row.name} ${e.target.checked ? 'selected' : 'unselected'}, ${checked.length} items selected, all available items selected`);
                        break;
                      default:
                        selectAllRef.current.indeterminate = true;
                        break;
                    }
                  }}/>
                </td>
              }
              {
                tdCells.map(cell => <td className={cell}>{row[cell]}</td>)
              }

            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};
