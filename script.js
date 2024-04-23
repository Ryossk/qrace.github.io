$(document).ready(function() {
    var data = [
        { "qubit": "superconductor", "T1": 30, "Reference": "Nature",  "one_qubit_gate": 1,  "two_qubit_gate": "-", "Year" : "-", "One logical qubit generation Rate": "-", "Comment": "-"},
        { "qubit": "superconductor", "T1": 25, "Reference": "Science",  "one_qubit_gate": 2,  "two_qubit_gate": "-", "Year" : "-", "One logical qubit generation Rate": "-", "Comment": "-"},
        { "qubit": "photon", "T1": 35, "Reference": "arXiv",  "one_qubit_gate": 3,  "two_qubit_gate": "-", "Year" : "-", "One logical qubit generation Rate": "-", "Comment": "-" },
        { "qubit": "semiconductor", "T1": 3, "Reference": "PRL",  "one_qubit_gate": 4,  "two_qubit_gate": "-", "Year" : "-", "One logical qubit generation Rate": "-", "Comment": "-" },
        { "qubit": "ion", "T1": 100, "Reference": "my note",  "one_qubit_gate": 1,  "two_qubit_gate": 2, "Year" : "-", "One logical qubit generation Rate": "-", "Comment": "-" }
        // Add more objects as needed
    ];

    var table = $('#mainTable').DataTable({
        data: data,
        columns: [
            { data: 'qubit' },
            { data: 'T1' },
            { data: 'one_qubit_gate' },
            { data: 'two_qubit_gate' },
            { data: 'One logical qubit generation Rate' },
            { data: 'Year' },
            { data: 'Reference' },
            { data: 'Comment' }

        ]
    });
});
