<script type="text/javascript">
              
                function validate()
                {
                    if(   document.getElementById("text1").value == "workshop"
                       && document.getElementById("text2").value == "workshop" )
                    {
                        alert( "validation succeeded" );
                        location.href="index.html";
                    }
                    else
                    {
                        alert( "validation failed" );
                        location.href="LoginPage.html";
                    }
                }
                </script>