using UnityEngine;
using System.Collections;

public class GenericMovementScript : MonoBehaviour {

    public float xAccel = 1.0f;
    public float yAccel = 1.0f;
    public float speed = 1.0f;

	// Use this for initialization
	void Start () {	
	}

	// Update is called once per frame
	void Update () {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");
        Vector3 move = new Vector3((horizontal*xAccel), (vertical*yAccel), 0);
     	transform.position += move * speed * Time.deltaTime;
	}
}
