document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('graph-container');

    const nodes = new vis.DataSet([
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
    ]);

    const edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },
    ]);

    const data = { nodes, edges };

    const options = {
        interaction: { dragNodes: true },
        physics: { enabled: true },
    };

    new vis.Network(container, data, options);
});
