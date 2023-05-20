<html>

    <head>
        <title>Booking</title>
    </head>

    <body>
    <?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $ticketType = $_POST['ticket-type'];
    $ticketCount = $_POST['count'];
    $date = $_POST['date'];
    $mealPlan = $_POST['meal-plan'];
    $promo = $_POST['promo'];
    $total = $_POST['total'];


    $conn = new mysqli('localhost', 'id20782100_shabab', 'HACKER@31971a', 'id20782100_silverstormdb');


    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO registrations (`name`, `number`, `ticket-type`, `ticket-count`, `date`, `meal`, `promo`, `total`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

        // Check if the statement was prepared successfully
        if ($stmt) {
            // Bind the parameters to the prepared statement
            $stmt->bind_param("sisssssi", $name, $phone, $ticketType, $ticketCount, $date, $mealPlan, $promo, $total);

            // Execute the statement
            if ($stmt->execute()) {
                // Registration successful
                echo '<script>
                        localStorage.setItem(`alert`, `success`);
                        window.location.href = "index.html"; 
                      </script>';


            } else {
                // Registration failed
                echo 'error : ' . $stmt->error;
                echo '<script>
                        localStorage.setItem(`alert`, `error`);
                        window.location.href = "index.html"; 
                      </script>';
    
            }

            // Close the prepared statement
            $stmt->close();
        } else {
            echo "Preparation of the statement failed: " . $conn->error;
        }

        // Close the connection
        $conn->close();
    }

    
?>

    </body>
</html>
