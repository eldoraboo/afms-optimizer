---
sidebar_position: 2
---

# Format of Hub Files

## Macro Hub Distribution

- macro_node.xlsx
- (id, existing/candidate)

### Example

| id  | physical_id | latitude | longitude | size | staff | subzone | traffic  | psm_month | population | exist | capacity |
| --- | ----------- | -------- | --------- | ---- | ----- | ------- | -------- | --------- | ---------- | ----- | -------- |
| 101 | 244         | 1.3266   | 103.8765  | 3744 | 1     | 9       | 14388.44 | 18.78     | 13661      | N     | 1.00E+08 |
| 102 | 253         | 1.311795 | 103.8662  | 8608 | 8     | 75      | 12216.11 | 15.345    | 23233      | N     | 1.00E+08 |

## Meso Hub Distribution

- meso_node.xlsx
- (id, existing/candidate)

### Example

| id   | physical_id | latitude | longitude | size | staff | subzone | traffic  | psm_month | population | exist | capacity |
| ---- | ----------- | -------- | --------- | ---- | ----- | ------- | -------- | --------- | ---------- | ----- | -------- |
| 1001 | 1001        | 1.326207 | 103.8895  | 600  | 0     | 6       | 12443.24 | 16        | 41990      | N     | 1.00E+07 |
| 1002 | 1002        | 1.319802 | 103.9029  | 1000 | 0     | 7       | 10885    | 26.54     | 63853      | N     | 1.00E+07 |

## Micro Hub Distribution

- customer_node.xlsx
- (id, xs, s, m, l, xl, xxl)

### Example

| id     | physical_id | latitude | longitude | subzone | traffic  | psm_month | population | xs  | s    | m   | l   | xl  | xxl | Aggregate |
| ------ | ----------- | -------- | --------- | ------- | -------- | --------- | ---------- | --- | ---- | --- | --- | --- | --- | --------- |
| 100001 | 100001      | 1.304746 | 103.8264  | 2       | 10127.04 | 15.67819  | 3054       | 691 | 1281 | 410 | 93  | 13  | 0   | Y         |
| 100002 | 100002      | 1.307246 | 103.8307  | 3       | 9819.711 | 15.67819  | 7129       | 798 | 1335 | 385 | 95  | 15  | 0   | Y         |

## Origin Distribution

- supplier_node.xlsx
- (id, xs, s, m, l, xl, xxl)

### Example

| id  | physical_id | latitude | longitude | size   | staff | subzone | traffic  | psm_month | population | xs     | s      | m      | l     | xl   | xxl |
| --- | ----------- | -------- | --------- | ------ | ----- | ------- | -------- | --------- | ---------- | ------ | ------ | ------ | ----- | ---- | --- |
| 1   | 130         | 1.362004 | 103.9015  | 47220  | 10    | 10      | 9207.321 | 20.94     | 20667      | 7      | 1865   | 7      | 3     | 1    | 0   |
| 2   | 110         | 1.436646 | 103.8437  | 12444  | 8     | 127     | 11335.84 | 13.14     | 71407      | 217    | 131930 | 1698   | 594   | 371  | 0   |
| 3   | 109         | 1.310654 | 103.6975  | 103603 | 153   | 217     | 5020.25  | 15.67819  | 27         | 526952 | 721495 | 206870 | 55173 | 9201 | 85  |
