import './Admin.css';
import { UserNavbar } from '../../components/userNavbar/UserNavbar'


export function Admin() {
    document.addEventListener("DOMContentLoaded", function () {
        const tableBody = document.querySelector("#inventario .table-body");

        if (localStorage.getItem('products')) {

            let products2 = JSON.parse(localStorage.getItem('products')) || []

            products2.forEach((product) => {
                const row = document.createElement("tr");

                row.innerHTML = `
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.amount}</td>
        `;

                tableBody.appendChild(row);
            });

        };
    });

    return (
        <>
            <UserNavbar></UserNavbar>
            <div class="switchable-table">
                <h1>Bienvenido, admin</h1>
                <ul>
                    <li class="tab-item active" target-wrapper="first-dynamic-table" target-tab="inventario">Inventario</li>
                    <li class="tab-item" target-wrapper="first-dynamic-table" target-tab="historial-compras">Historial de compras</li>
                    <li class="tab-item" target-wrapper="first-dynamic-table" target-tab="registro-ventas">Registro de ventas</li>
                </ul>
                <div id="first-dynamic-table">
                    <div class="tab-content active" id="inventario">
                        <h2>Inventario</h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Equipo</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Disponibles</th>
                                </tr>
                            </thead>
                            <tbody class="table-body">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Monitor 1</td>
                                    <td>100</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Monitor 2</td>
                                    <td>150</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Monitor 3</td>
                                    <td>500</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Monitor 4</td>
                                    <td>300</td>
                                    <td>13</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content" id="historial-compras">
                        <h2>Historial de compras</h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID de compra</th>
                                    <th scope="col">Equipo</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Fecha compra</th>
                                    <th scope="col">Forma de pago</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Monitor 1</td>
                                    <td>100</td>
                                    <td>10/10/23</td>
                                    <td>Tarjeta crédito</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Monitor 2</td>
                                    <td>150</td>
                                    <td>15/10/23</td>
                                    <td>Transferencia</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Monitor 3</td>
                                    <td>500</td>
                                    <td>08/10/23</td>
                                    <td>Efectivo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content" id="registro-ventas">
                        <h2>Registro de ventas</h2>
                    </div>
                </div>
            </div>
        </>
    );
}