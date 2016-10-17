<?php 
    include ('includes/header.php');
?>
    <div class="container container1"  style="margin-top:100px;">
        <h2 class="text-center">How to install Raspbian OS on Raspberry Pi </h2><br>
        <ul>
            <li>
                <p>At first, you will need to download the image file of the Raspbian OS from <a href="#">here.</a>We recommend Raspbian OS as it is the offical operating system of the Raspberry Pi and comes preinstalled with some powerful tools such as python, LibreOffice,etc.
                </p><br>
            </li>
            <li>
                <p>Once you have downladed the image file, you will need a tool for burning this image to SD card. We recommend <a href="">Win32DiskImager</a>. Download his tool it's availabe for free. 
                </p><br>
            </li>
            <li>
                <p>After downloading all the required softwares, now let's start the interesting part of burning the image to the SD card. Open the installed Win32DiskImager.  </p> <br>
                <ol>
                    <li>
                        <p>In the Image File section browse to the location where the image file is downloaded and select the image file.</p><br>
                    </li>
                    <li>
                        <p>In the Device section select the SD card (Note: Do this step carefully elsse you would end up erasing the current harddisk of your computer!).</p><br>
                    </li>
                    <li>
                        <p>After performing above steps, click on 'write', and wait for sometime to complete the burning of image file onto your SD card.</p>
                    </li><br>
                </ol>  
                <div class="row">
                <div class="col-md-3"></div>
                <div  class="col-md-6">
                    <img src="images/Win32.png" class="thumbnail img-responsive" style="text-align:center;display:block;"><br>
                </div>
                <div class="col-md-3"></div>
                </div>
            </li>
            <li><p>
                Once all the steps above are completed you are now ready to boot you Raspbian OS from you Pi.
            </p></li><br>
            <li><p>
                Now put the SD card in your Pi, plug in the power source, and let the Pi boot. Once the Pi boots, you will be prompted with the first time boot windows of Raspbian.
            </p></li><br>
            <div class="row">
                <div class="col-md-3"></div>
                <div  class="col-md-6">
                    <img src="images/raspiconfig.png" class="thumbnail img-responsive" style="text-align:center;display:block;"><br>
                </div>
                <div class="col-md-3"></div>
                </div>
            <li>
                <p>
                    Configure the required options as per your requirements.
                </p>
            </li><br>
            <li>
                <p>
                    After finishing the setup click on the 'finish' button and press Enter.
                </p>
            </li><br>
            <li>
                <p>
                    Congratulations! You have successfully booted the Raspbian OS into your Rpi.      
                </p>
            </li><br>
            <li>
                <p>
                    Hope you enjoyed this tutorial, contact us if any suggestions or help. Happy Coding!
                </p>
            </li><br>
        </ul>
        <pre><code>
             &lt?php echo "Hello"; ?>
        </code></pre>
    </div>
    <style type="text/css">
        .container1{
            background-color: #f8f8f8;
            border-radius: 12px;
        }
    </style>
<?php
    include ('includes/footer.php');
?>