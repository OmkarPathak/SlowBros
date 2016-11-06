<?php 
    include ('includes/header.php');
?>

 <?php

    $filename = 'rpi_motion.php';
    if (file_exists($filename)) {
        echo "<small style='color:gray;'>Created at: " . date ("F d Y H:i:s.", filectime($filename))."<br></small>";
        echo "<small style='color:gray;'>Last modified at: " . date ("F d Y H:i:s.", getlastmod())."</small>";
    }

?>
    <br>
    <ul>
        <li><p>For this first install the Raspbian OS. If you don't know how to do that <a href="rpi_os_install.php">here's the link!</a></p>
        </li>
    </ul>
    <pre class="line-numbers"><code class="language-php">&lt?php echo "Hello";?></code>
    </pre>
                    
<?php
    include ('includes/footer.php');
?>