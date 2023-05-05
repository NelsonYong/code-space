const svg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjcwcHgiIGhlaWdodD0iMjQwcHgiIHZpZXdCb3g9IjAgMCAyNzAgMjQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPue8lue7hCAzPC90aXRsZT4KICAgIDxnIGlkPSLpppbpobUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NzAuMDAwMDAwLCAtMjAwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3MC4wMDAwMDAsIDIwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLkuInop5LlvaLlpIfku70tMjYiIGZpbGw9IiM0MkQzOTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzLjc1MDAwMCwgMzAuMDAwMDAwKSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC0zMy43NTAwMDAsIC0zMC4wMDAwMDApICIgcG9pbnRzPSIzMy43NSAwIDY3LjUgNjAgMCA2MCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzUsMCBMMTE4LjA2MywzMC4xMTEgTDEwMSwwIEwxMzUsMCBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjNDJEMzkzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuS4ieinkuW9ouWkh+S7vS0yOCIgZmlsbD0iIzQ4Q0I5RCIgcG9pbnRzPSI2Ny41IDAgMTAxLjI1IDYwIDMzLjc1IDYwIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzNSwwIEwxNTEuOTM3LDMwLjExMSBMMTM1LDYwIEwxMTguMDYzLDMwLjExMSBMMTM1LDAgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iIzQ4Q0I5RCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDEuMjI3LDYwLjA0MiBMMTEzLDgxIEwxMTcsMTIwIEw2Ny41LDEyMCBMMTAxLjIyNyw2MC4wNDIgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iIzU4QTlDOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjguNzczLDYwLjA0MiBMMjAyLjUsMTIwIEwxNTMsMTIwIEwxNTcsODEgTDE2OC43NzMsNjAuMDQyIFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGw9IiM1OEE5QzgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQxLjkyMywxMzIuMzA3IEwxNjguNzUsMTgwIEwxMDEuMjUsMTgwIEwxMjguMDc3LDEzMi4zMDcgTDEzNSwxNDAgTDE0MS45MjMsMTMyLjMwNyBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjNjA4REVDIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuS4ieinkuW9ouWkh+S7vS0zMCIgZmlsbD0iIzQ4Q0I5RCIgcG9pbnRzPSIyMDIuNSAwIDIzNi4yNSA2MCAxNjguNzUgNjAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTY5LC01LjQ1Njk2ODIxZS0xMiBMMTUxLjkzNywzMC4xMTEgTDEzNSwwIEwxNjksLTUuNDU2OTY4MjFlLTEyIFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGw9IiM0MkQzOTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i5LiJ6KeS5b2i5aSH5Lu9LTM5IiBmaWxsPSIjNDJEMzkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzYuMjUwMDAwLCAzMC4wMDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTIzNi4yNTAwMDAsIC0zMC4wMDAwMDApICIgcG9pbnRzPSIyMzYuMjUgMCAyNzAgNjAgMjAyLjUgNjAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i5LiJ6KeS5b2i5aSH5Lu9LTQwIiBmaWxsPSIjNTBCREFGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDIuNTAwMDAwLCA5MC4wMDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTIwMi41MDAwMDAsIC05MC4wMDAwMDApICIgcG9pbnRzPSIyMDIuNSA2MCAyMzYuMjUgMTIwIDE2OC43NSAxMjAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i5LiJ6KeS5b2i5aSH5Lu9LTQxIiBmaWxsPSIjNTBCREFGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ny41MDAwMDAsIDkwLjAwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtNjcuNTAwMDAwLCAtOTAuMDAwMDAwKSAiIHBvaW50cz0iNjcuNSA2MCAxMDEuMjUgMTIwIDMzLjc1IDEyMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9IiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iIzUwQkRBRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTcsMTIwIEwxMjguMDc3LDEzMi4zMDggTDEwMS4yNSwxODAgTDY3LjUsMTIwIEwxMTcsMTIwIFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGw9IiM1RTlCREYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAyLjUsMTIwIEwxNjguNzUsMTgwIEwxNDEuOTI0LDEzMi4zMDggTDE1MywxMjAgTDIwMi41LDEyMCBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjNUU5QkRGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuS4ieinkuW9ouWkh+S7vS00NSIgZmlsbD0iIzYzODBGQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM1LjAwMDAwMCwgMjEwLjAwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMTM1LjAwMDAwMCwgLTIxMC4wMDAwMDApICIgcG9pbnRzPSIxMzUgMTgwIDE2OC43NSAyNDAgMTAxLjI1IDI0MCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='

const packageIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY5Mjg1NjMxNzM5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5OTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTU1OC40NTIzNjQgOTUuNDE4MTgybDcuOTEyNzI3IDQuMTQyNTQ1TDg0My40MDM2MzYgMjU3Ljg2MTgxOGExMDguOTE2MzY0IDEwOC45MTYzNjQgMCAwIDEgNTQuMjI1NDU1IDg1Ljk2OTQ1NWwwLjMyNTgxOCA4LjI4NTA5MXYzMTYuNzQxODE4YzAgMzYuMDcyNzI3LTE3LjkyIDY5LjU4NTQ1NS00Ny40Mjk4MTggODkuNzg2MTgybC02Ljk4MTgxOCA0LjM3NTI3Mi0wLjEzOTYzNyAwLjA5MzA5MS0yNzcuMDM4NTQ1IDE1OC4zMDEwOTFjLTEyLjE5NDkwOSA2Ljk4MTgxOC0yNS4zNjcyNzMgMTEuNDk2NzI3LTM4LjgxODkwOSAxMy40NTE2MzdhMjkuNzg5MDkxIDI5Ljc4OTA5MSAwIDAgMS0zMS4xODU0NTUtMC4wNDY1NDYgMTA3LjUyIDEwNy41MiAwIDAgMS0zMS4zMjUwOTEtOS40OTUyNzNsLTcuNDQ3MjcyLTMuOTA5ODE4LTI3Ny4wMzg1NDYtMTU4LjMwMTA5MWExMDguOTE2MzY0IDEwOC45MTYzNjQgMCAwIDEtNTQuMjI1NDU0LTg2LjAxNmwtMC4zMjU4MTktOC4yMzg1NDVWMzUyLjExNjM2NGMwLTM2LjA3MjcyNyAxNy45Mi02OS42MzIgNDcuNDI5ODE5LTg5Ljc4NjE4Mmw2Ljk4MTgxOC00LjM3NTI3MyAwLjEzOTYzNi0wLjA5MzA5MUw0NTcuNTg4MzY0IDk5LjYwNzI3M2ExMDguODY5ODE4IDEwOC44Njk4MTggMCAwIDEgMTAwLjg2NC00LjE0MjU0NnpNMTg1LjcxNjM2NCAzNDYuMjk4MTgybC0wLjMyNTgxOSA1LjgxODE4MnYzMTYuNjk1MjcyYzAgMTUuNjg1ODE4IDcuNDQ3MjczIDMwLjI1NDU0NSAxOS44MjgzNjQgMzkuNTYzNjM3bDQuODQwNzI3IDMuMjExNjM2IDI3Mi4xOTc4MTkgMTU1LjUwODM2NHYtMzUwLjcyTDE4NS45MDI1NDUgMzQ0Ljk5NDkwOWE0OS4zMzgxODIgNDkuMzM4MTgyIDAgMCAwLTAuMTg2MTgxIDEuMzQ5ODE4eiBtNjUyLjM4MTA5MS0xLjAyNEw1NDEuNjQ5NDU1IDUxNi42NTQ1NDV2MzUwLjQ4NzI3M2wyNzIuMjQ0MzYzLTE1NS41NTQ5MDljMTMuNTQ0NzI3LTcuODY2MTgyIDIyLjQ4MTQ1NS0yMS41OTcwOTEgMjQuMzQzMjczLTM2Ljk1NzA5MWwwLjMyNTgxOC01LjgxODE4MlYzNTIuMTYyOTA5YzAtMi4zMjcyNzMtMC4xMzk2MzYtNC42NTQ1NDUtMC40NjU0NTQtNi44ODg3Mjd6IG0tMzQ0Ljk0ODM2NC0xOTcuMTY2NTQ2bC01LjkxMTI3MyAyLjg4NTgxOS0wLjA5MzA5MSAwLjA5MzA5LTI2MC41NjE0NTQgMTQ4LjgwNTgxOSAyODUuNjQ5NDU0IDE2NS4yMzYzNjMgMjg1LjMyMzYzNy0xNjUuMDUwMTgyLTI2MC43MDEwOTEtMTQ4Ljk5Mi0wLjEzOTYzNy0wLjA5MzA5YTQ5LjQ3NzgxOCA0OS40Nzc4MTggMCAwIDAtNDMuNTY2NTQ1LTIuODg1ODE5eiIgZmlsbD0iI2RiZGJkYiIgcC1pZD0iMTk5MyI+PC9wYXRoPjwvc3ZnPg=='


export {
  svg,
  packageIcon
}