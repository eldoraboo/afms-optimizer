---
sidebar_position: 3
---

# Format of Supporting Files

## Physical Node

- physical_node.xlsx
- list of physical nodes (given id of entity provided by data owners)
- (physical_id, lat, long)

### Example

| physical_id | latitude | longitude |
| ----------- | -------- | --------- |
| 130         | 1.362004 | 103.9015  |
| 110         | 1.436646 | 103.8437  |

## Physical Node Distribution

- dist_physical_node.xlsx
- Travel distance matrix for each pair of nodes
- (physical_id pairs matrix)

### Example

| physical_id | 130      | 110      | 109      |
| ----------- | -------- | -------- | -------- |
| **130**     | 0        | 10.49625 | 23.38562 |
| **110**     | 10.49625 | 0        | 21.45703 |
| **109**     | 23.38562 | 21.45703 | 0        |

## Node Mapping

- map_vn_to_pn.xlsx
- a mapping of virtual nodes (unique id for coding purposes) to physical nodes
- (id, physical_id)

### Example

| id  | physical_id |
| --- | ----------- |
| 1   | 130         |
| 2   | 110         |
| 3   | 109         |
