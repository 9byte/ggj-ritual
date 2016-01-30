using UnityEngine;
using System.Collections;

public class EnemySpawner : MonoBehaviour {

	private float timeBlock = 0f;
	public float spawnDelaySeconds = 3f;
	public Transform test;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update ()
	{
		timeBlock += Time.deltaTime;
		if (timeBlock > spawnDelaySeconds) {
			timeBlock -= spawnDelaySeconds;
			doSpawn();
		}
	
	}

	void doSpawn ()
	{
		float x = 0.01f * Random.Range(1, 99);
		Vector3 pos = new Vector3(x, 0.9f, 0.3f);
		pos = Camera.main.ViewportToWorldPoint(pos);
		Instantiate(test, pos, Quaternion.identity);
	}
}
